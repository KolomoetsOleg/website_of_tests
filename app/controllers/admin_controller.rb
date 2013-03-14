class AdminController < ApplicationController
  def adminpage
    @tests = Test.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @tests }
    end
  end
end
