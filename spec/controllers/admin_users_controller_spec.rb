require "spec_helper"

  describe UsersController do

    before(:each) do
      @user = FactoryGirl.create(:user)
      @test = FactoryGirl.create(:test)
      @rezult = FactoryGirl.create(:rezult)
    end

    it "create a result for first user and first test and watch it's attempt" do
      get :index, :id=>1
      @rezult.attempt.should 1
    end

  end