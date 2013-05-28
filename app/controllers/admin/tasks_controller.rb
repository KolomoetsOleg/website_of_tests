#encoding: UTF-8
class Admin::TasksController < ApplicationController
  
  def index
    @tests = Task.order("id DESC").paginate(:page => params[:page], :per_page => 6)
  end

  def new
    @test = Task.new
    @flag = "new" #Флаг отображения чекбокса "active"
  end

  def edit
    @flag = "1"
    @test = Task.find(params[:id])
  end

  def create
    @flag = "new"
    if params[:task][:active] == "1"
      redirect_to new_admin_task_path
      flash[:error] = "Нельзя активировать Тест, пока в нем нет вопросов"
    else
      @test = Task.create(params[:task], :author_id => @user.id)
      if @test.errors.empty?
        redirect_to admin_tasks_path
      else
        redirect_to new_admin_task_path
      end
    end
  end

  def update
    @test = Task.find(params[:id])
    @all_quest = @test.quests.count
    if @all_quest == 0 and params[:task][:active] == "1"
      redirect_to edit_admin_task_path(@test)
      flash[:error] = "Нельзя активировать Тест, пока в нем нет вопросов"
    else  
      @test = Task.find(params[:id])
      @test.update_attributes(params[:task])
      if @test.errors.empty?
        redirect_to admin_tasks_path
      else
        redirect_to edit_admin_task_path(@test)
      end
    end
  end

  def destroy
    Task.find(params[:id]).destroy
    redirect_to admin_tasks_path
  end

  def results
    @test =  Task.find(params[:id])
    @results = @test.rezults
  end
  
end