class ApplicationController < ActionController::Base
  
  protect_from_forgery
  before_filter :authenticate_user!
  before_filter :find_current_user

  def find_current_user
  	@user = current_user
  end

end