class User < ActiveRecord::Base
  
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :f_name, :l_name, :remember_me
  validates :f_name, :length => {:maximum => 50, :minimum => 2}, :presence => true
  validates :l_name, :length => {:maximum => 50, :minimum => 2}, :presence => true
  # attr_accessible :title, :body
  before_create :create_role
  has_many :users_roles
  has_many :roles, :through => :users_roles 
  has_many :posts
  has_many :rezults
  has_many :user_answer
  private

  def create_role
    self.roles << Role.find_by_name(:user)
  end

  def self.update_roles(users, roles)
    users.each_with_index do |user_id, index|
      updates = UsersRole.find(user_id)
      updates[:role_id] = roles[index]
      updates.save
    end
  end
end
