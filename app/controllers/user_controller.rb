class UserController < ApplicationController
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
