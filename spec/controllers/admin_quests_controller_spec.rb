#encoding: UTF-8
require "spec_helper"
include Devise::TestHelpers
  describe Admin::QuestsController do
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
      @ans   = ["11","22","33","44","55"]
      @stat  = ["2"]
      @new_q_tip3 = {"task_id"=>@task.id, "tip_vop"=>"3", "title"=>"first q", "cost"=>"1"}    
    end


    describe "update" do
      it "renders task's 'edit' page if validation of activity failed on updating the Task" do
        put :update, :quest=>{title: @quest[:title], cost: @quest[:cost].to_s},:answer=>["aaanswer"], :answer_id=>[@answer.id],:status=>[@answer.id], :id=>@quest.id.to_s
        response.should redirect_to(admin_quest_path(@quest.task_id))
      end
    end

    describe "destroy" do
      it "test's redirecting path after destoying the test" do
        delete :destroy, :id=>@quest.id
        response.should redirect_to(admin_quest_path(assigns(:task_id)))
      end
    end

  end