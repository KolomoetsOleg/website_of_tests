class Admin::UsersController < ApplicationController
  
  def index
    @users = User.order("email ASC").paginate(:page => params[:page], :per_page => 5)
  end

  def results
    @user =  User.find(params[:id])
    @results = @user.rezults
  end

  def update_roles
    users =  params[:user]
    roles = params[:role]
    users.each_with_index do |user_id, index|
      updates = UsersRole.find(user_id)
      updates[:role_id] = roles[index]
      updates.save
    end
    redirect_to admin_users_path
  end
  
end