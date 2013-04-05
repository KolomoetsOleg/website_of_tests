class Answer < ActiveRecord::Base

  attr_accessible :answer, :status, :quest_id
  
  belongs_to :quest

end
