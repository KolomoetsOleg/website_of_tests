class BestAnswer < ActiveRecord::Base
  attr_accessible :test_id, :user_id, :quest_id, :answer, :bool_answer
end
