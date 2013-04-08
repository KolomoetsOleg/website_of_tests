class TestUsingController < ApplicationController

	def index
		@tests = Test.active.paginate(:page => params[:page], :per_page => 5)
    usersrole = UsersRole.find_by_user_id(@user.id)
    @role = usersrole.role_id
	end

	def show
		@test = Test.find(params[:id])
		@rezult = Rezult.where('user_id = ? and test_id = ?', @user.id, @test.id).first
    	@rezult ||= Rezult.create
	end


	def start
		#
		# Функция создания блока ответов в таблице UserAnswer
		# create_start_data - возвращает массив из id вопросов первого вопроса по днанному тесту
		# session[:array_id] - массив из id вопросов в сессии
		#
		 @rezult = Rezult.where('user_id = ? and test_id = ?', @user.id, params[:id]).first
    
    	if @rezult.nil? 
     		@rezult = Rezult.create(:test_id => params[:id], :user_id => @user.id, :attempt => 1)
    	else
     		@rezult.update_attributes(:attempt => (@rezult.attempt + 1))  
    	end

		array_id = UserAnswer.create_start_data(@user.id, params[:id])
		session[:array_id] = array_id
		session[:time] = Time.now.getlocal("+03:00")  + Test.find(params[:id]).time*60
		session[:id] = array_id.first
		redirect_to :action => :testing
	end


	def testing
		#
		# @quest - вопрос
		# @all_quest - общее количиство вопросов
		# @next_quest - следующий вопрос
		# @count - номер текущего вопроса
		# @time - время
		
		if params[:answer] != nil
			@user_answer = UserAnswer.where(:quest_id => params[:id_quest], :user_id => @user.id).first
			UserAnswer.update(@user_answer,:status => 1, :answer => params[:answer].to_s)
		end

		@time = session[:time]
		@quest = Quest.find_by_id(session[:id])
		@all_quest = session[:array_id].count
		@count = 1 + session[:array_id].index(session[:id].to_i)
		id_from_useranswer = UserAnswer.where(:quest_id => @quest.id, :user_id => @user.id).first.id
		#Блок "Следующий вопрос"
		next_quest = UserAnswer.find_by_sql("SELECT quest_id FROM user_answers WHERE status = false AND id >"+id_from_useranswer.to_s+" AND user_id = "+@user.id.to_s+";").first
		if next_quest.nil?
			next_quest = UserAnswer.find_by_sql("SELECT quest_id FROM user_answers WHERE status = false  AND user_id = "+@user.id.to_s+";").first		
		end

		if next_quest.nil?
			respond_to do |format|
        		format.html
        		format.js { render :action => :finish }
        	end
		else
			session[:id] = next_quest.quest_id
			respond_to do |format|
        		format.html
        		format.js
        	end
		end
		
		# Конец блока "Следующий вопрос"
	end


	def finish
		answer_user = UserAnswer.find_all_by_user_id(@user.id)
		@bal = Quest.check(answer_user)
		@bal = 0 if Time.now.getlocal("+03:00") > session[:time] + 60 # погрешность 1 минута на всякий случай)
		
		

	end



end
