#encoding: UTF-8
class Admin::TestsController < ApplicationController
  
  def index
    @tests = Test.order("id DESC").paginate(:page => params[:page], :per_page => 6)
  end

  def new
    @test = Test.new
    @flag = "new"
  end

  def edit
    @flag = "1"
    @test = Test.find(params[:id])
  end

  def create
    @flag = "new"
    if params[:test][:active] == "1"
      redirect_to new_admin_test_path
      flash[:error] = "Нельзя активировать Тест, пока в нем нет вопросов"
    else
      @test = Test.create(params[:test], :author_id => @user.id)
      redirect_to admin_tests_path
    end
  end

  def update
    @flag = "1"
    @test = Test.find(params[:id])
    @all_quest = @test.quests.count
    if @all_quest == 0 and params[:test][:active] == "1"
      redirect_to edit_admin_test_path(@test)
      flash[:error] = "Нельзя активировать Тест, пока в нем нет вопросов"
    else  
      @test = Test.find(params[:id]).update_attributes(params[:test])
      redirect_to admin_tests_path
    end
  end

  def destroy
    Test.find(params[:id]).destroy
    redirect_to admin_tests_path
  end

  def results
    @test =  Test.find(params[:id])
    @results = @test.rezults
  end
  
end