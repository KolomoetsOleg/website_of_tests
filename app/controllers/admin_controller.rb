class AdminController < ApplicationController

  def show
    if @user.roles[0].name == "user"
      redirect_to not_allowed_users_path
    end
  end
  
end
