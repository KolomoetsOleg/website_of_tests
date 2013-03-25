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
  @time = session[:time]
  @all_quest = session[:quest_id].count
  @page = params[:id].to_i
  @end = false
  unless params[:id_quest].nil?
  
      if params[:answer].nil? 
        session[:quest_id][@page - 1][params[:id_quest].to_i] = 0    
      else
        session[:quest_id][@page - 1][params[:id_quest].to_i] = 1
      end    
  end
    session[:answer_id][params[:id_quest]] = params[:answer]
    if params[:end].nil?
        @quest = Quest.find(session[:quest_id][@page].keys.first)
        @end = true if session[:quest_id][@page+=1].nil?
    else
        redirect_to  :action => :finish
    end
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



end
