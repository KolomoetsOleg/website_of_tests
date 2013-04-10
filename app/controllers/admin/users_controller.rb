class Admin::UsersController < ApplicationController
  
  def index
    @users = User.order("email ASC").paginate(:page => params[:page], :per_page => 5)
  end

  def results
    @user =  User.find(params[:id])
    @results = @user.rezults
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