class Admin::TestsController < ApplicationController
  
  def index
    @tests = Test.order("id DESC").paginate(:page => params[:page], :per_page => 5)
  end

  def new
    @test = Test.new
  end

  def edit
    @test = Test.find(params[:id])
  end

  def create
    @test = Test.create(params[:test], :author_id => @user.id)
    redirect_to admin_tests_path
  end

  def update
    @test = Test.find(params[:id]).update_attributes(params[:test])
    redirect_to admin_tests_path
  end

  def destroy
    Test.find(params[:id]).destroy
    redirect_to admin_tests_path
  end

  def results
    @test =  Test.find(params[:id])
    @results = @test.rezults
  end
  
end