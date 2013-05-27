class Admin::UsersController < ApplicationController
  
  def index
    @users = User.order("email ASC").paginate(:page => params[:page], :per_page => 5)
  end

  def results
    @user =  User.find(params[:id])
    @results = @user.rezults
  end

  def update_roles
    User.update_roles(params[:user], params[:role])
    redirect_to admin_users_path
  end
  
  def attempt #Страница для сброса и просмотра кол-ва попыток!
    @user  = User.find(params[:id])
    @tests = Task.all
  end

  def to_default # Сбрасывает кол-во использованых попыток до нуля!
    @att  = Rezult.where('user_id = ? and task_id = ?', @user.id, params[:id]).first
    @att.attempt  = 0
    @att.save
    redirect_to attempt_admin_user_path(@user)
  end
  
  def answer_result # Загружает таблицу для нужного теста, нужного юзера
    @user  = User.find(params[:id])
    @results = @user.rezults
    @table = BestAnswer.where(:user_id=>@user,:task_id=>params[:t_id]).all
  end
end