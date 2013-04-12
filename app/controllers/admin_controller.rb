class AdminController < ApplicationController

  def show
    redirect_to not_allowed_users_path if @user.roles[0].name == "user"
  end
  
end
