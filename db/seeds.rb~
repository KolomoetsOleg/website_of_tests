# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Role.create(:name => :admin)
Role.create(:name => :user)
Test.create(:title => "Test test",
			:kol_pop => 5,
			:time => 1234,
			:active => 1
	)
Quest.create([{ :title => "choose a car", 		:tip_vop => 1, :test_id => 1}, 
			  { :title => "choose the river", 	:tip_vop => 2, :test_id => 1}, 
			  { :title => "Student sity",       :tip_vop => 3, :test_id => 1} ])

Answer.create([ { :answer => "tachka", 		:status => 0, :quest_id => 1},
				{ :answer => "BMX",    		:status => 0, :quest_id => 1},
				{ :answer => "roller", 		:status => 0, :quest_id => 1},
				{ :answer => "Volga",  		:status => 1, :quest_id => 2},
				{ :answer => "Black see",   :status => 0, :quest_id => 2},
				{ :answer => "Kaspesk see", :status => 0, :quest_id => 2},
				{ :answer => "Atlantik",    :status => 0, :quest_id => 2},
				{ :answer => "Dnepr",       :status => 1, :quest_id => 2},
				{ :answer => "kharkiv",     :status => 1, :quest_id => 3}])