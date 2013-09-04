class Admin::QuestsController < ApplicationController
  layout false, :only => :edit

  def index
    @quests = Quest.all
  end

  def show
    @test = Task.find(params[:id])
    @quests = Quest.find_all_by_task_id(@test)
  end

  def new
    @quest = Quest.new
    @author = @user
  end

  def edit
    @quest = Quest.find(params[:id])
    @answers = @quest.answers
  end

  def create

    if Quest.create_quest(params[:quest], params[:answer], params[:status])

    else
      redirect_to root_path
    end  
  end


  def update
    Quest.update_quest(params[:quest], params[:answer], params[:answer_id], params[:status], params[:id])
    @quest = Quest.find(params[:id])
    redirect_to admin_quest_path(@quest.task_id)
  end

  def destroy
    @task_id = Quest.find(params[:id]).task_id
    Quest.destroy_quest(params[:id])
    redirect_to admin_quest_path(@task_id)
  end

end


