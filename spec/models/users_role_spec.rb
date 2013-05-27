require 'spec_helper'
	
	describe UsersRole do
		it { should belong_to(:user) } 
		it { should belong_to(:role) } 
	end