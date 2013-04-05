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
    @quest = Quest.create(params[:quest])
    @id = Quest.last[:id]
    @answers = params[:answer]
    @status = params[:status]
    @i = @answers.length-1

    for @j in 0..@i
      if @status.include?(@j.to_s) || @quest[:tip_vop]==3
         Answer.create(:answer => @answers[@j], :status => 1, :quest_id => @id)
      else
        Answer.create(:answer => @answers[@j], :status => 0, :quest_id => @id)
      end
    end
  end

  def update
    @quest = Quest.find(params[:id])
    @answers = @quest.answers

    if @quest.update_attributes(params[:quest])
      redirect_to admin_quest_path(@quest.test_id)
    end

    @answer = params[:answer]
    @answer_id = params[:answer_id].map(&:to_i)


    @answers.each { |d| d.destroy unless @answer_id.include?(d.id) }

    @answer_id.each_with_index do |a, index|
      d =  Answer.find_by_id(a) || Answer.new
      status =  params[:status].nil? || !params[:status].include?(a.to_s) ? 0 : 1
      d.update_attributes(answer: @answer[index], status: status, quest_id: @quest.id)
    end

  end

  def destroy
    @quest = Quest.find(params[:id])
    @answer = Answer.find_all_by_quest_id(@quest.id)
    @quest.destroy
    @answer.each do |a|
      a.destroy
    end
    redirect_to admin_quest_path(@quest.test_id)
  end

end


