class BestAnswer < ActiveRecord::Base
  attr_accessible :task_id, :user_id, :quest_id, :answer, :bool_answer
end
