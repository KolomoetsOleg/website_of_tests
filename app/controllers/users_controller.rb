class UsersController < ApplicationController
  
  def rezult
    @rezults = @user.rezults
  end

end