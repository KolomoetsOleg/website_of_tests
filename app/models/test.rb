class Test < ActiveRecord::Base
  attr_accessible :active, :author_id, :kol_pop, :time, :title, :description
  has_many :quest
  has_many :rezult
end
