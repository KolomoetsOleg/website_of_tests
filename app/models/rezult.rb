class Rezult < ActiveRecord::Base

   attr_accessible :user_id, :task_id, :attempt, :bal
   belongs_to :task
   belongs_to :user
     
end
