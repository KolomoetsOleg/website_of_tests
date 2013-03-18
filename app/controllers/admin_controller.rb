class AdminController < ApplicationController
  def adminpage
    @tests = Test.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @tests }
    end
  end

  def show
    @users = User.all

    respond_to do |format|
      format.html
      format.json { render :json => @users }
    end

  end

  def update_roles
     param = params[:user]
     if !param.nil?
     param.each do |user|
       update = UsersRole.find(user)
       update[:role_id] = "1"
       update.save
     end
     end
    redirect_to :action => "show"
  end
end
