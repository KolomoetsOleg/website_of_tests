class Admin::UsersController < ApplicationController
  
  def index
    @users = User.all
  end

  #TODO!! this is bad..
  def update_roles
    users =  params[:user]
    roles = params[:role]
    s = 0
    if !users.nil?
      users.each do |user_id|
        updates = UsersRole.find(user_id)
        updates[:role_id] = roles[s]
        updates.save
        s += 1
      end
    end
    redirect_to :action => "index"
  end
  
end