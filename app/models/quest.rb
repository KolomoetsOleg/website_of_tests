class Quest < ActiveRecord::Base
  
  attr_accessible :tip_vop, :title, :test_id, :cost
  belongs_to :test
  has_many :answers
  has_many :user_answer

  def self.check(answers_user) # Хеш ответов пользователя, id testa
    @bal = 0
    answers_user.each do |answer|

      case Quest.find(answer.quest_id).tip_vop
      when 1
         @bal += 1 if(answer.answer == Answer.where(:status => 1, :quest_id => answer.quest_id).first[:answer])
      when 2
        @array = Array.new
        Answer.where(:status => 1, :quest_id => answer.quest_id).all.each do |ans| 
          @array << ans.answer
        end
        @bal += 1 if answer.answer == @array.to_s
      when 3
        @bal += 1 if answer.answer.to_s.downcase.rstrip.lstrip == Answer.find_by_quest_id(answer.quest_id).answer.to_s.downcase.rstrip.lstrip
      when 4
        @bal += check_by_program(answer.id) unless answer.answer.nil?
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
    #  binding.pry
       
      url_user = UserAnswer.find_by_id(id_user_answer)
      url_test = Rails.root.to_s + "/public" + Answer.find_by_quest_id(url_user.quest_id).answer.to_s
      url_user = Rails.root.to_s + "/public" + url_user.answer.to_s

      require url_user
      require url_test
    
      begin
        bal = checkup
      rescue NameError
        bal = 0
      end

      File.delete(url_user)
      return bal

   
  end

  #
  #Admin part
  #

  def self.create_quest(quest, answer, status)
    @quest = Quest.create(quest)

    answer.each_with_index do |s, index|
      if status.include?(index.to_s) || @quest[:tip_vop]== 3
        Answer.create(:answer => s, :status => 1, :quest_id => @quest.id)
      else
        Answer.create(:answer => s, :status => 0, :quest_id => @quest.id)
      end
    end
  end

  def self.update_quest(quest, answer, answer_id, status, id)


    @quest = Quest.find(id)
    @answers = @quest.answers
    @quest.update_attributes(quest)
    @answer_id = answer_id.map(&:to_i)

    @answers.each { |d| d.destroy unless @answer_id.include?(d.id) }

    @answer_id.each_with_index do |a, index|
      d =  Answer.find_by_id(a) || Answer.new
      status_id =  status.nil? || !status.include?(a.to_s) ? 0 : 1
      d.update_attributes(answer: answer[index], status: status_id, quest_id: id)
    end
  end

  def self.destroy_quest(id)
    @answer = Answer.find_all_by_quest_id(id)
    path = "public/uploads/tests/"+id.to_s+".rb"
    File.delete(path) if File.file?(path)
    @answer.each do |a|
      a.destroy
    end
    Quest.destroy(id)
  end

end
