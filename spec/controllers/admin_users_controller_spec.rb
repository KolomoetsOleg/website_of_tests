require "spec_helper"
include Devise::TestHelpers
  describe Admin::UsersController do
    before(:all) do
      Role.create(:name=>"user")
      Role.create(:name=>"admin")
      User.delete_all
      @user  = FactoryGirl.create(:user)
    end

    describe "Watching Results!" do
      before(:each) do
        @user=User.first
        sign_in @user 
        @task1 = FactoryGirl.create(:task, :author_id=>@user.id)
        @task2 = FactoryGirl.create(:task, :author_id=>@user.id,:title=>"Test for Rspec")
        @rez1  = FactoryGirl.create(:rezult, :user_id=>@user.id, :task_id=>@task1.id)
        @rez2  = FactoryGirl.create(:rezult, :user_id=>@user.id, :task_id=>@task2.id)
      end

      it "create a result for first user and first test and watch it's bal" do
        get :results, id: @user.id
        @result= assigns(:results)
        @result[0][:bal].should eq(100)
      end

      it "create a result for first user and second test and watch it's attempt" do
        get :results, id: @user.id
        @result= assigns(:results)
        @result[1][:attempt].should eq(1)
      end
    end

    describe "to_default method" do

      before(:each) do        
        @user=User.first
        sign_in @user 
        @task = FactoryGirl.create(:task, :author_id=>@user.id)
        @rez  = FactoryGirl.create(:rezult, :user_id=>@user.id, :task_id=>@task.id)

      end

      it "test to_default method result" do
        put :to_default, id: @task.id
        assigns(:att)[:attempt].should eq(0)   
      end

      it "test's redircting path of to_default" do
        put :to_default, id: @task.id
        response.should redirect_to(attempt_admin_user_path(@user))
      end
    end

    describe "update_roles method" do
      before(:each) do
        @admin=Role.where(:name=>"admin").first
        @user=User.first
        sign_in @user 
      end

      it "tests out-role of user!" do
        put :update_roles, user: [@user.id], role: [@admin.id]
        @user.roles.first.id.should eq(@admin.id)
      end

      it "tests after_updating path" do
        put :update_roles, user: [@user.id], role: [@admin.id]
        response.should redirect_to(admin_users_path)
      end
    end

    describe "attempt method" do
      before(:each) do
         @task = FactoryGirl.create(:task, :author_id=>@user.id)
         @user = User.first
         sign_in @user 
      end

      it "check user_id data" do
        get :attempt, id: @user.id
        assigns(:user)[:id].should eq(@user.id)
      end

      it "check tasks data" do
        get :attempt, id: @user.id
        assigns(:tests)[0][:id].should eq(@task.id)
      end

    describe "answer_result method" do
      it "check redirect of answer_result method" do
        @user = User.first
        @task = Task.first
        get :answer_result, id: @user.id, t_id: @task.id
        assigns
      end

    end

    end

  end