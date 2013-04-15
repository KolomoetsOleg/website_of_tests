class UsersController < ApplicationController
  
  def rezult
    @rezults = @user.rezults
  end

  def not_allowed
  end

end