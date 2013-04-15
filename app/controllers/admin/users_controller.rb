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
  
end