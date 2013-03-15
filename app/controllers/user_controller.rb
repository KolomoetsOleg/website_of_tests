class UserController < ApplicationController
  
  def index
    @user = User.find(session["warden.user.user.key"][1].first)
    @tests = Test.find_all_by_active(1)
  end
  
  def rezult
    @rezult = Rezult.where(:user_id => session["warden.user.user.key"][1].first)
  end

  
  # GET /userpage
  # GET /userpage.json
  def userpage
    @tests = Test.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @tests }
    end
  end

end
