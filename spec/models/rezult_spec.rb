require 'spec_helper'
	
	describe Rezult do
		it { should belong_to(:task) } 
		it { should belong_to(:user) } 
	end
