#encoding: UTF-8
require "spec_helper"
include Devise::TestHelpers
  describe TestUsingController do
    before(:all) do
      Role.create(:name=>"user")
      Role.create(:name=>"admin")
      User.delete_all
      FactoryGirl.create(:user)
    end

    before(:each) do
      @user=User.first
      sign_in @user
      @task  = FactoryGirl.create(:task, :author_id=>@user.id)  
      @quest  = FactoryGirl.create(:quest, :task_id=>@task.id)
      @answer = FactoryGirl.create(:answer, :quest_id=>@quest.id)
      put :start, id: @task.id #Для создания сессионных переменных
    end


    describe "testing process" do
      it "tests redirect of 'start' method" do
        response.should redirect_to(:action=>:testing)
      end

      it "tests render of 'testing' method"  do
        get :testing, :answer=>"123", :id_quest=>@quest.id
        response.should render_template(:action => :finish) 
      end
    

      it "tests 'finish' method" do
        get :finish
        response.should render_template('finish')         
      end
    end

    describe "other actions of test_using controller" do
      it "tests simple show method" do
        get :show, :id=>@task.id
        response.should render_template('show') 
      end

      it "tests simple index method" do
        get :index, :id=>@task.id
        response.should render_template('index') 
      end

    end
  end
