class Quest < ActiveRecord::Base
  attr_accessible :tip_vop, :title, :test_id
  belongs_to :test
  belongs_to :answer
end
