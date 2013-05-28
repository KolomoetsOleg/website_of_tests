#encoding: UTF-8
require "spec_helper"
include Devise::TestHelpers
  describe Admin::TasksController do
    before(:all) do
      Role.create(:name=>"user")
      Role.create(:name=>"admin")
      User.delete_all
      FactoryGirl.create(:user)
    end

    before(:each) do
      @user=User.first
      sign_in @user
    end

    describe "create" do

      it "renders task's 'index' page if validation of activity not failed" do
        post :create, task: {:active=>0, :author_id=>1, :kol_pop=>5, :time=>15, :title=>"Test for Rspec", :description=>"A simple description"}
        response.should redirect_to(admin_tasks_path)
      end

      it "renders 'new' task template if validation is failed" do
        post :create, task: {:active=>1, :author_id=>1, :kol_pop=>5, :time=>15, :title=>"Test for Rspec", :description=>"A simple description"}
        response.should redirect_to(new_admin_task_path)
      end

      it "set flash error if actvity validation have been failed" do
        post :create, task: {:active=>1, :author_id=>1, :kol_pop=>5, :time=>15, :title=>"Test for Rspec", :description=>"A simple description"}
        flash[:error].should =~ /Нельзя активировать Тест, пока в нем нет вопросов/
      end

      it "renders 'new' task template if any validation failed" do
        post :create, task: {:active=>0, :author_id=>1, :title=>"Test for Rspec", :description=>"A simple description"}
        response.should redirect_to(new_admin_task_path)
      end
    end

    describe "update" do
      before(:each) do
        @task  = FactoryGirl.create(:task, :author_id=>@user.id)     
      end

      it "renders task's 'edit' page if validation of activity failed on updating the Task" do
        put :update, id: @task.id, task: {:active=>1, :author_id=>1, :kol_pop=>5, :time=>15, :title=>"Test for Rspec", :description=>"A simple description"}
        response.should redirect_to(edit_admin_task_path(@task))
      end

      it "renders task's edit page if any valditation failed" do
        put :update, id: @task.id, task: {:active=>0, :author_id=>1, :kol_pop=>15, :time=>15, :title=>"Test for Rspec", :description=>"A simple description"}
        response.should redirect_to(edit_admin_task_path(@task))
      end

      it "set flash error if actvity validation have been failed on updating th activity" do
        put :update, id: @task.id, task: {:active=>1, :author_id=>1, :kol_pop=>5, :time=>15, :title=>"Test for Rspec", :description=>"A simple description"}
        flash[:error].should =~ /Нельзя активировать Тест, пока в нем нет вопросов/
      end

      it "renders task's 'index' page if validation have been passed on updating the Task" do
        put :update, id: @task.id, task: {:active=>0, :author_id=>1, :kol_pop=>4, :time=>15, :title=>"Test for Rspec", :description=>"A simple description"}
        response.should redirect_to(admin_tasks_path)
      end

      it "renders task's 'index' page if validation of quest presence passes" do
        @quest  = FactoryGirl.create(:quest, :task_id=>@task.id)
        @answer = FactoryGirl.create(:answer, :quest_id=>@quest.id) 
        put :update, id: @task.id, task: {:active=>1, :author_id=>1, :kol_pop=>4, :time=>15, :title=>"Test for Rspec", :description=>"A simple description"}
        response.should redirect_to(admin_tasks_path)
      end

      it "renders task's 'edit' page if validation of quest presence is failed" do
        Quest.where(:task_id=>@task.id).delete_all
        put :update, id: @task.id, task: {:active=>1, :author_id=>1, :kol_pop=>4, :time=>15, :title=>"Test for Rspec", :description=>"A simple description"}
        response.should redirect_to(edit_admin_task_path(@task))
      end

    end

    describe "destroy" do
      it "test's redirecting path after destoying the test" do
        @task  = FactoryGirl.create(:task, :author_id=>@user.id)   
        delete :destroy, :id=>@task.id
        response.should redirect_to(admin_tasks_path)
      end
    end

    describe "results" do
      it "test's presence of results of test" do
        @task  = FactoryGirl.create(:task, :author_id=>@user.id) 
        @rez   = FactoryGirl.create(:rezult, :user_id=>@user.id, :task_id=>@task.id)  
        get :results, :id=>@task.id
        assigns(:results).should eq([@rez])
      end
    end

  end