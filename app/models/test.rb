class Test < ActiveRecord::Base
  attr_accessible :active, :author_id, :kol_pop, :time, :title, :description
  has_many :quest
  has_many :rezult
  validates :kol_pop, :numericality => {:greater_than => 0, :less_than => 10}
  validates :title,   :presence => {:format => '%{message}'}
  
  
end