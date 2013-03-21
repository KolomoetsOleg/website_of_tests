class QuestsController < ApplicationController
  # GET /quests
  # GET /quests.json
  def index
    @quests = Quest.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @quests }
    end
  end

  # GET /quests/1
  # GET /quests/1.json
  def show
    @test = Test.find(params[:id])
    @quests = Quest.find_all_by_test_id(@test)

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @quest }
    end
  end

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
  @time = Test.find(session[:test_id]).time
  session[:time] = Time.now + (@time.hour*360+@time.min*60)
  
 redirect_to :action => :testing 
end


def testing
  @time = session[:time]
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
  @bal = Quest.chek(session[:answer_id])
  @rezult = Rezult.where(:user_id => session["warden.user.user.key"][1].first, :test_id => session[:test_id]).first
  if @rezult.nil?
    @rezult = Rezult.new
    @rezult.test_id = session[:test_id]
    @rezult.user_id = session["warden.user.user.key"][1].first
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



  # GET /quests/new/:id
  # GET /quests/new/:id.json
  def new
    @quest = Quest.new
    @author = session["warden.user.user.key"][1]

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @quest }
    end
  end

  # GET /quests/1/edit
  def edit
    @quest = Quest.find(params[:id])
  end

  # POST /quests
  # POST /quests.json
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

  # PUT /quests/1
  # PUT /quests/1.json
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

  # DELETE /quests/1
  # DELETE /quests/1.json
  def destroy
    @quest = Quest.find(params[:id])
    @quest.destroy

    respond_to do |format|
      format.html { redirect_to quests_url }
      format.json { head :no_content }
    end
  end
end
