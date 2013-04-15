class Admin::QuestsController < ApplicationController
  layout false, :only => :edit

  def index
    @quests = Quest.all
  end

  def show
    @test = Test.find(params[:id])
    @quests = Quest.find_all_by_test_id(@test)
  end

  def new
    #
    @quest = Quest.new
    @author = @user
  end

  def edit
    @quest = Quest.find(params[:id])
    @answers = @quest.answers

  end

  def create
    Quest.create_quest(params[:quest], params[:answer], params[:status])
  end


  def update
    Quest.update_quest(params[:quest], params[:answer], params[:answer_id], params[:status], params[:id])
    @quest = Quest.find(params[:id])
    redirect_to admin_quest_path(@quest.test_id)
  end

  def destroy
    @test_id = Quest.find(params[:id]).test_id
    Quest.destroy_quest(params[:id])
    redirect_to admin_quest_path(@test_id)
  end

end


