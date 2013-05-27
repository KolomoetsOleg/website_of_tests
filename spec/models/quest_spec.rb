require 'spec_helper'
  
  describe Quest do

    it { should belong_to(:task) } 
    it { should have_many(:answers) } 
    it { should have_many(:user_answer) } 
    it { should validate_numericality_of(:cost)}

    describe "quest_methods" do
      before(:each) do
        User.delete_all
        @user   = FactoryGirl.create(:user)
        @task   = FactoryGirl.create(:task, :author_id=>@user.id, :title=>"Test for Rspec")
        @quest1  = FactoryGirl.create(:quest, :task_id=>@task.id)
        @quest2  = FactoryGirl.create(:quest, :task_id=>@task.id, :tip_vop=>"1")
        @answer1 = FactoryGirl.create(:answer, :quest_id=>@quest1.id)
        @ans   = ["11","22","33","44","55"]
        @stat  = ["2"]
        @new_q_tip3 = {"task_id"=>@task.id, "tip_vop"=>"3", "title"=>"first q", "cost"=>"1"}
        @new_q_tip2 = {"task_id"=>@task.id, "tip_vop"=>"2", "title"=>"second q", "cost"=>"1"}
      end

      it "should create a quest, with type 2" do
        Quest.create_quest(@new_q_tip2, @ans, @stat)
        Answer.find_by_quest_id(Quest.last.id).status.should eq(false)
      end

      it "should create a quest, with type 3" do
        Quest.create_quest(@new_q_tip3, @ans, @stat)
        Answer.find_by_quest_id(Quest.last.id).status.should eq(true)
      end

      it "should update a quest, with type 3" do
        Quest.update_quest( {title: @quest1[:title], cost: @quest1[:cost].to_s}, ["aaanswer"], [@answer1.id], [@answer1.id], @quest1.id.to_s)
        Answer.find_by_quest_id(@quest1.id).answer.should eq("aaanswer")
      end

      it "should destroy the test! This is Rails!!!" do
        Quest.destroy_quest(@quest1.id)
        Quest.where(:id=>@quest1.id).should eq([])
      end

      it "shoud test answers checking method" do
        @answer = FactoryGirl.create(:answer, :quest_id=>@quest2.id)
        UserAnswer.create(:user_id=>@user.id, :quest_id=>@quest2.id, :answer=>@answer.answer, :status=>1)
        answer_user = UserAnswer.find_all_by_user_id(@user.id)
        bal = Quest.check(answer_user)
        bal.should eq(100)
      end

    end

  end
