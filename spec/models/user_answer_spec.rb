require 'spec_helper'
	describe UserAnswer do
		before(:each) do
			User.delete_all
			@user   = FactoryGirl.create(:user)
			@task   = FactoryGirl.create(:task, :author_id=>@user.id, :title=>"Test for Rspec")
			@quest1  = FactoryGirl.create(:quest, :task_id=>@task.id)
			@quest2  = FactoryGirl.create(:quest, :task_id=>@task.id)
			@answer1 = FactoryGirl.create(:answer, :quest_id=>@quest1.id)
			@answer2 = FactoryGirl.create(:answer, :quest_id=>@quest2.id)
		end

		it { should belong_to(:user)  }  
		it { should belong_to(:quest) }

		it "tests create's start data method" do
			array = UserAnswer.create_start_data(@user.id,@task.id.to_s)
			quest = Quest.where(:task_id=>@task.id)
			test_arr = Array.new
			quest.each do |q|
				test_arr << q.id
			end
			array.should eq(test_arr)
		end
	end
