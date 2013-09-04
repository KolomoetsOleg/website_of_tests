# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#
#Create roles
#
Role.create(:name => :admin)
Role.create(:name => :user)


#
#Create Test, Quest and Answer
#
Task.create(:title => "Test test",
      :description => "This is Andrew's test)))",
			:kol_pop => 5,
			:time => 10,
			:active => 1
	)
Quest.create([{ :title => "choose a car", 		:tip_vop => 1, :task_id => 1, :cost => 0.5},
			  { :title => "choose the river", 	:tip_vop => 2, :task_id => 1, :cost => 0.5},
			  { :title => "Student sity",       :tip_vop => 3, :task_id => 1, :cost => 0.5} ])

Answer.create([ 		{ :answer => "tachka", 		:status => 0, :quest_id => 1},
				{ :answer => "BMW", 		:status => 1, :quest_id => 1},
				{ :answer => "BMX",    		:status => 0, :quest_id => 1},
				{ :answer => "roller", 		:status => 0, :quest_id => 1},
				{ :answer => "Volga",  		:status => 1, :quest_id => 2},
				{ :answer => "Black see",   :status => 0, :quest_id => 2},
				{ :answer => "Kaspesk see", :status => 0, :quest_id => 2},
				{ :answer => "Atlantik",    :status => 0, :quest_id => 2},
				{ :answer => "Dnepr",       :status => 1, :quest_id => 2},
				{ :answer => "kharkiv",     :status => 1, :quest_id => 3},
        ])


Task.create(:title => "Oleg's test",
            :description => "This is Oleg's test)))",
            :kol_pop => 2,
            :time => 1,
            :active => 1
)
Quest.create([{ :title => "chose true", 		:tip_vop => 1, :task_id => 2, :cost => 0.5},
              { :title => "chose color", 	:tip_vop => 2, :task_id => 2, :cost => 0.5},
              { :title => "who are you?",       :tip_vop => 3, :task_id => 2, :cost => 0.5} ])

Answer.create([ 		{ :answer => "java", 		:status => 0, :quest_id => 4},
                    { :answer => "true", 		:status => 1, :quest_id => 4},
                    { :answer => "false",    		:status => 0, :quest_id => 4},
                    { :answer => "int", 		:status => 0, :quest_id => 4},
                    { :answer => "green",  		:status => 1, :quest_id => 5},
                    { :answer => "see",   :status => 0, :quest_id => 5},
                    { :answer => "river", :status => 0, :quest_id => 5},
                    { :answer => "moon",    :status => 0, :quest_id => 5},
                    { :answer => "red",       :status => 1, :quest_id => 5},
                    { :answer => "user",     :status => 1, :quest_id => 6}])


Quest.create(      { :title => "test", 		:tip_vop => 4, :task_id => 1, :cost => 0.5})
Answer.create(     { :answer => "/uploads/tests/7.rb",     :status => 1, :quest_id => 7})
#
#Create User, UsersRole
#
User.create(:email => "bacr@bacr.com", :password => "123456789", :f_name => "BacR", :l_name => "Bashenov" )
User.create(:email => "admin@admin.com", :password => "123456789", :f_name => "Admin", :l_name => "Nimda" )
admin =  UsersRole.find(2)
admin[:role_id] ="1"
admin.save


