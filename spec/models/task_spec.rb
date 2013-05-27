require 'spec_helper'
	
	describe Task do

		it { should have_many(:quests) } 
		it { should have_many(:rezults) } 

		it { should validate_numericality_of(:kol_pop)}
		it { should validate_numericality_of(:time)}
		it { should validate_presence_of(:title) }
		
	end
