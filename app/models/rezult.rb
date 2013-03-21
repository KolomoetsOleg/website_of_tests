class Rezult < ActiveRecord::Base

   attr_accessible :user_id, :test_id, :attempt, :bal
   belongs_to :test
   belongs_to :user
     
end
