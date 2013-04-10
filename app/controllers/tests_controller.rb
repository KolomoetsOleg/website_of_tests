class TestsController < ApplicationController

  def index
    @tests = Test.active.paginate(:page => params[:page], :per_page => 5)
  end

  def show

    @test = Test.find(params[:id])
  end

end