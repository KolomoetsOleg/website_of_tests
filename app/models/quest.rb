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
      
      when 4
        
        if answer.answer.nil?

        else
          @bal += check_by_program(answer.id)

        end
        #binding.pry

      else
        @bal += 1 if answer.answer == Answer.find_by_quest_id(answer.quest_id).answer
      end 
    end

    @bal
  end

  def self.check_by_program(id_user_answer)
    #  url_user - адрес юзерской программы
    #  url_test - адрес админского теста
    # 
    #  user_program - текст юзерской программы
    #  test_program - текст админской программы
    #binding.pry
       
      url_user = UserAnswer.find_by_id(id_user_answer)
      url_test = Rails.root.to_s + "/public" + Answer.find_by_quest_id(url_user.quest_id).answer.to_s
      url_user = Rails.root.to_s + "/public" + url_user.answer.to_s

      require url_user
      require url_test
    
      bal = checkup
   
  end





end
