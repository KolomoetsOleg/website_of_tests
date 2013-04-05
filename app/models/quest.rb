class Quest < ActiveRecord::Base
  
  attr_accessible :tip_vop, :title, :test_id
  belongs_to :test
  has_many :answers
  has_many :user_answer

  def self.check(answers_user) # Хеш ответов пользователя, id testa
    @bal = 0
    answers_user.each do |answer|

      case Quest.find(answer.quest_id).tip_vop
      when 1
        if(answer.answer == Answer.where(:status => 1, :quest_id => answer.quest_id).first[:answer])
          @bal += 1
        end
      when 2
        @array = Array.new
        Answer.where(:status => 1, :quest_id => answer.quest_id).all.each do |ans| 
          @array << ans.answer
        end
        @bal += 1 if answer.answer == @array.to_s
      else
        @bal += 1 if answer.answer == Answer.find_by_quest_id(answer.quest_id).answer
      end 
    end

    @bal
  end

end
