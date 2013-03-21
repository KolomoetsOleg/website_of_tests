class Quest < ActiveRecord::Base
  
  attr_accessible :tip_vop, :title, :test_id
  belongs_to :test
  has_many :answers


  #TODO refactor this
  def self.check(answer_id) # Хеш ответов пользователя, id testa
    @bal = 0
    answer_id.delete(nil)
    answer_id.each do |id_q, answer_u|
      case Quest.find(id_q).tip_vop
      when 1
        if(answer_u == Answer.where(:status => 1, :quest_id => id_q).first[:answer])
          @bal += 1
        end
      when 2
        @array = Array.new
        Answer.where(:status => 1, :quest_id => id_q).all.each do |ans| 
          @array << ans.answer
        end
        @bal += 1 if answer_u == @array
      else
        @bal += 1 if answer_u == Answer.find_by_quest_id(id_q).answer
      end 
    end

    @bal
  end

end
