class QuestsController < ApplicationController

  def start
    @rezult = Rezult.where('user_id = ? and test_id = ?', @user.id, session[:test_id]).first
    
    if @rezult.nil? 
     @rezult = Rezult.create(:test_id => session[:test_id], :user_id => @user.id, :attempt => 1)
    else
     @rezult.update_attributes(:attempt => (@rezult.attempt + 1))  
    end

    session[:time] = Time.now.getlocal("+02:00")  + Test.find(session[:test_id]).time*60

    redirect_to :action => :testing
  end


def testing
  #
  # session[:time]      - время до которого нужно закончить тест
  # session[:quest_id]  - массив из id вопросов
  # session[:answer_id] - хеш ответов юзера на вопросы {id(id вопроса), answer (ответ)}
  # session[:status]    - масив статусов вопросов (на которые ответил, а на которы нет)
  # params[:id]         - id вопроса из массива quest_id
  # params[:id_quest]   - id вопроса на который было отвечено
  # params[:answer]     - значение на которое ответел юзер
  # session[:end]       - показатель конца масива
  #
  @time = session[:time]
  @all_quest = session[:quest_id].count
  @page = params[:id].to_i
  @quest = params[:id_quest].to_i
  @end = false

  # Проверка было на вопрос отвечено или нажато кнопка "Пропустить"
  unless params[:next].nil?
    if params[:answer].nil? 
      session[:status][session[:quest_id].index(@page)] = 0 
    else
      session[:status][session[:quest_id].index(@page)] = 1
      # Внесение ответа в хеш ответов юзера
      session[:answer_id][params[:id_quest]] = params[:answer]
    end    
  end

puts session[:status]
puts session[:end]
  if session[:end] == false
    @quest = Quest.find(session[:quest_id][@page])
    @page+=1
    if session[:quest_id][@page].nil?
      session[:end] = true
    end
  else
   
    if session[:status].index(0).nil?
      redirect_to :action => :finish
    else
      @quest = Quest.find(session[:quest_id][session[:status].index(0)])  
      @page = session[:quest_id].index(@quest.id)
      @page +=1
    end

  end


 #if params[:end].nil? 
 #@quest = Quest.find(session[:quest_id][@page].keys.first)
 #  if session[:quest_id][@page+=1].nil? &&  
 #   @end = true 
 # else
#@quest = Quest.find(session[:quest_id].first.keys.first)
# end
# else
#   redirect_to  :action => :finish
# end
end

def finish
  @bal = Quest.check(session[:answer_id])
  @bal = 0 if Time.now.getlocal("+02:00") > session[:time] + 60 # погрешность 1 минута на всякий случай)
  @rezult = Rezult.where(:user_id => @user, :test_id => session[:test_id]).first
  if @rezult.nil?
    @rezult = Rezult.create(:test_id => session[:test_id], :user_id => @user, :bal => @bal)
  else
    @rezult.update_attributes(:bal => @bal) if  @rezult.bal < @bal
  end     
  #@rezult.bal = @bal
end

  def new
    @quest = Quest.new
    @author = @user
  end

  def edit
    @quest = Quest.find(params[:id])
  end

  def create
    @quest = Quest.new(params[:quest])
end


end
