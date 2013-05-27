require 'spec_helper'
	
	describe User do
		
	  it { should have_many(:users_roles) }
	  it { should have_many(:roles).through(:users_roles) }
	  it { should have_many(:rezults) }
	  it { should have_many(:user_answer) }

		it { should ensure_length_of(:f_name) }
		it { should ensure_length_of(:l_name) }
		it { should validate_presence_of(:f_name) }
		it { should validate_presence_of(:l_name) }

		describe "role methods in user model" do

			before(:each) do
				User.delete_all
				@user1 = FactoryGirl.create(:user)
				@u_role=Role.where(:name=>"user").first.id
				@a_role=Role.where(:name=>"admin").first.id
				User.update_roles([@user1.id],[@a_role])
			end

			it "checks signed or not an admin role to account" do
 			  User.find(@user1.id).roles.first.id.should eq(@a_role)
 			end

			it "resining user role to account" do
				User.update_roles([@user1.id],[@u_role])
 			  User.find(@user1.id).roles.first.id.should eq(@u_role)
			end


		end


	end