class UserAnswer < ActiveRecord::Base
 attr_accessible :user_id, :quest_id, :answer, :status
 belongs_to :user
 belongs_to :quest


 def self.create_start_data(user_id, test_id)
 	#
 	# Заполнение начальными значениями
 	# полей для тестирования.
 	# id_quest - переменная передающяя первый вопрос для начала теста
 	quests = Quest.find_by_sql("SELECT id FROM quests WHERE test_id = "+test_id+";")
 	UserAnswer.delete_all(:user_id => user_id)

 	quests.each do |quest|
 		UserAnswer.create(:quest_id => quest.id, :user_id => user_id)
 	end
 	quests = UserAnswer.where(:user_id => user_id)
 	array_id = Array.new
 	quests.each { |quest| array_id << quest.quest_id }
 	array_id

 end

end