class UserController < ApplicationController
  
  def index
    @user = User.find(session["warden.user.user.key"][1].first)
    @tests = Test.all
  end
  
  def rezult
    
  end

  
end
