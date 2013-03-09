class Answer < ActiveRecord::Base
  attr_accessible :answer, :status, :quest_id
  has_many :quest
end
