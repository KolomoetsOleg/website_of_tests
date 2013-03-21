class QuestsController < ApplicationController

  def index
    @quests = Quest.all
  end

  def show
    @test = Test.find(params[:id])
    @quests = Quest.find_all_by_test_id(@test)
  end

  #TODO do something with that!! :)
  def start
    @rezult = Rezult.where(:user_id => session["warden.user.user.key"][1].first, :test_id => session[:test_id]).first
    if @rezult.nil?
      @rezult = Rezult.new
      @rezult.test_id = session[:test_id]
      @rezult.user_id = session["warden.user.user.key"][1].first
      @rezult.attempt = 1
      @rezult.save 
    else
      @rezult.attempt = @rezult.attempt + 1
      @rezult.save
    end
    redirect_to :action => :testing 
  end

  def testing
    @all_quest = session[:quest_id].count
    @page = params[:id].to_i
    @end = false
    if params[:id_quest].nil?
      
    else
      if params[:answer].nil?
        session[:quest_id][@page - 1][params[:id_quest].to_i] = 0    
      else
        session[:quest_id][@page - 1][params[:id_quest].to_i] = 1
      end    
    end
    session[:answer_id][params[:id_quest]] = params[:answer]
    if params[:end].nil?
        @quest = Quest.find(session[:quest_id][@page].keys.first)
         if session[:quest_id][@page+=1] == nil
          @end = true
        end 
    else
        redirect_to  :action => :finish
    end
  end

  def finish
    @bal = Quest.check(session[:answer_id])
    @rezult = Rezult.where(:user_id => @user, :test_id => session[:test_id]).first
    if @rezult.nil?
      @rezult = Rezult.new
      @rezult.test_id = session[:test_id]
      @rezult.user_id = @user
      @rezult.bal = @bal
      @rezult.save 
    else
      if  @rezult.bal < @bal
        @rezult.bal = @bal
        @rezult.save
      end
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
