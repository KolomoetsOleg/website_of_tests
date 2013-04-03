class TestUsingController < ApplicationController

	def index
		@tests = Test.active.paginate(:page => params[:page], :per_page => 5)
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
		array_id = UserAnswer.create_start_data(@user.id, params[:id])
		session[:array_id] = array_id
		redirect_to :action => :testing, :id => array_id.first
	end


	def testing
		#
		# @quest - вопрос
		# @all_quest - общее количиство вопросов
		# @next_quest - следующий вопрос
		# @count - номер текущего вопроса
		#
		
		if params[:answer] != nil
			@user_answer = UserAnswer.where(:quest_id => params[:id_quest], :user_id => @user.id).first
			UserAnswer.update(@user_answer,:status => 1, :answer => params[:answer].to_s)
		end

		@quest = Quest.find_by_id(params[:id])
		@all_quest = session[:array_id].count
		@count = 1 + session[:array_id].index(params[:id].to_i)
		id_from_useranswer = UserAnswer.where(:quest_id => @quest.id, :user_id => @user.id).first.id
		#Блок "Следующий вопрос"
		next_quest = UserAnswer.find_by_sql("SELECT quest_id FROM user_answers WHERE status = 0 AND id >"+id_from_useranswer.to_s+" AND user_id = "+@user.id.to_s+";").first
		if next_quest.nil?
			next_quest = UserAnswer.find_by_sql("SELECT quest_id FROM user_answers WHERE status = 0 AND user_id = "+@user.id.to_s+";").first		
		end
		
		puts 
		if next_quest.nil?
			redirect_to :action => :finish
		else
			@next_quest = next_quest.quest_id
		end
		
		# Конец блока "Следующий вопрос"
				

	end


	def finish
		answer_user = UserAnswer.find_all_by_user_id(@user.id)
		@bal = Quest.check(answer_user)

	end



end
