class QuestsController < ApplicationController

  def index
    @quests = Quest.all
  end

  def show
    @test = Test.find(params[:id])
    @quests = Quest.find_all_by_test_id(@test)
  end


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

  def new
    @quest = Quest.new
    @author = @user
  end

  def edit
    @quest = Quest.find(params[:id])
  end

  def create
    @quest = Quest.new(params[:quest])

    respond_to do |format|
      if @quest.save
        format.html { redirect_to @quest, notice: 'Quest was successfully created.' }
        format.json { render json: @quest, status: :created, location: @quest }
      else
        format.html { render action: "new" }
        format.json { render json: @quest.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @quest = Quest.find(params[:id])

    respond_to do |format|
      if @quest.update_attributes(params[:quest])
        format.html { redirect_to @quest, notice: 'Quest was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @quest.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @quest = Quest.find(params[:id])
    @quest.destroy
    redirect_to quests_url
  end

end
