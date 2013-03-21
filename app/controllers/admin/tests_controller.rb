class Admin::TestsController < ApplicationController
  
  def index
    @tests = Test.all.paginate(:page => params[:page], :per_page => 5)
  end

  def new
    @test = Test.new
  end

  def edit
    @test = Test.find(params[:id])
  end

  def create
    @test = Test.new(params[:test])
    @test.author_id = @user.id
    if @test.save
      redirect_to admin_tests_path, notice: 'Test was successfully created.'
    else
      render action: "new"
    end
  end

  def update
    update = Hash.new
    update = params[:test]
    update[:time] = Time.new(update.delete("time(1i)"), update.delete("time(2i)"), update.delete("time(3i)"), update.delete("time(4i)"), update.delete("time(5i)"))
    @test = Test.find(params[:id])
    @test.author_id = @user.id
    if @test.update_attributes(update)
      redirect_to admin_tests_path, notice: 'Test was successfully updated.'
    else
      render action: "edit"
    end
  end

  def destroy
    @test = Test.find(params[:id])
    @test.destroy
    redirect_to admin_tests_path
  end
  
end