class UserController < ApplicationController
  
  def index
    @user = User.find(session["warden.user.user.key"][1].first)
    @tests = Test.all
  end
  
  def rezult
    @rezult = Rezult.where(:user_id => session["warden.user.user.key"][1].first)
    puts @rezut.class
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
