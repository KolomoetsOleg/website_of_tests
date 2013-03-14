class PagesController < ApplicationController

  def chose
    user_stat = UsersRole.find_by_user_id(session["warden.user.user.key"][1])
    if user_stat[:role_id] == 1
      redirect_to adminpage_path
    else
      redirect_to userpage_path
    end
  end

end
