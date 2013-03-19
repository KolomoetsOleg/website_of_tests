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
     users =  params[:user]
     roles = params[:role]
     s= 0
     if !users.nil?
     users.each do |user_id|
       updates = UsersRole.find(user_id)
       updates[:role_id] = roles[s]
       updates.save
       s+=1

       end
     end
    redirect_to :action => "show"
  end
end
