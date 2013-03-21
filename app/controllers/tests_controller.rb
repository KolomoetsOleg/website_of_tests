class TestsController < ApplicationController

  def index
    @tests = Test.active.paginate(:page => params[:page], :per_page => 5)
  end

  def show
    @test = Test.find(params[:id])
  end

  def start
    @test = Test.find(params[:id])
    session[:test_id] = params[:id]
    @rezult = Rezult.where('user_id = ? and test_id = ?', @user.id, @test.id).first
    @rezult ||= Rezult.create
    session[:quest_id] = nil #Хранение id вопросов  
    session[:answer_id] = nil # Хранение ответов на вопрос
    quest_id = Array.new
    answer_id = Hash.new
    @test.quests.each do |quest| 
      quest_id << { quest.id => 0 }
    end
    session[:quest_id] = quest_id
    session[:answer_id] = answer_id
  end

end
