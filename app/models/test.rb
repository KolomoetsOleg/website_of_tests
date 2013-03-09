class Test < ActiveRecord::Base
  attr_accessible :active, :author_id, :kol_pop, :time, :title
  has_many :user
  has_many :quest
end
