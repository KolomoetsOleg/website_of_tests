class UserController < ApplicationController
  
  def index
    @user = User.find(session["warden.user.user.key"][1].first)
  end
  

  
end
