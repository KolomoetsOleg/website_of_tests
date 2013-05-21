class TestUsingController < ApplicationController
	def index
		@tests = Test.active.order(:id).reverse_order.paginate(:page => params[:page], :per_page => 10)
    	usersrole = UsersRole.find_by_user_id(@user.id)
    	$role=@@role = usersrole.role_id
    	#@test = Test.find(params[:id])
    	#@rezult =
	end

	def show
		@test = Test.find(params[:id])
		@rezult = Rezult.where('user_id = ? and test_id = ?', @user.id, @test.id).first
    	@rezult ||= Rezult.create(:user_id => @user.id, :test_id => @test.id)
	end


	def start
		#
		# Функция создания блока ответов в таблице UserAnswer
		# create_start_data - возвращает массив из id вопросов первого вопроса по днанному тесту
		# session[:array_id] - массив из id вопросов в сессии
		#
		@rezult = Rezult.where('user_id = ? and test_id = ?', @user.id, params[:id]).first
    	
    	@rezult.nil? ? @rezult = Rezult.create(:test_id => params[:id], :user_id => @user.id, :attempt => 1) : @rezult.update_attributes(:attempt => (@rezult.attempt + 1))  
    	
		array_id = UserAnswer.create_start_data(@user.id, params[:id])
		session[:array_id] = array_id
		session[:test_id] = params[:id]
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
		
		unless params[:answer].nil?
			@user_answer = UserAnswer.where(:quest_id => params[:id_quest], :user_id => @user.id).first
			UserAnswer.update(@user_answer,:status => 1, :answer => params[:answer].to_s)
		end

		@time = session[:time]
		@quest = Quest.find_by_id(session[:id])
		@all_quest = session[:array_id].count
		if @all_quest == 0 
			render "errorq.haml"
		else
		@count = 1 + session[:array_id].index(session[:id].to_i) 
		id_from_useranswer = UserAnswer.where(:quest_id => @quest.id, :user_id => @user.id).first.id
		#Блок "Следующий вопрос"
		next_quest = UserAnswer.find_by_sql("SELECT quest_id FROM user_answers WHERE status = false AND id >"+id_from_useranswer.to_s+" AND user_id = "+@user.id.to_s+";").first
		next_quest = UserAnswer.find_by_sql("SELECT quest_id FROM user_answers WHERE status = false  AND user_id = "+@user.id.to_s+";").first if next_quest.nil?

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
		end
		# Конец блока "Следующий вопрос"
	end


	def finish
		@time = params[:time]
		answer_user = UserAnswer.find_all_by_user_id(@user.id)
		@bal = Quest.check(answer_user)
		@bal = 0 if Time.now.getlocal("+03:00") > session[:time] + 60 # погрешность 1 минута на всякий случай)
		@rezult = Rezult.where(:user_id => @user, :test_id => session[:test_id]).first
  		@rezult.nil? ? @rezult = Rezult.create(:test_id => session[:test_id], :user_id => @user.id, :bal => @bal) : @rezult.update_attributes(:bal => @bal) if  @rezult.bal < @bal  
  		@b_answer = BestAnswer.where(:user_id => @user, :test_id => session[:test_id]).all

  		answer_hash=Array.new

  		answer_user.each do |elem|
  		  answer_hash << {:test_id => session[:test_id].to_i, :user_id => @user.id,:quest_id=> elem[:quest_id],:answer=>elem[:answer],:bool_answer=>elem[:status]}
  		end
  	if @b_answer.empty?
  			BestAnswer.create(answer_hash)	
  	else
  		if @bal >= @rezult.bal 
  			answer_hash.each do |x|
  				#binding.pry
  			  BestAnswer.where(:test_id => x[:test_id], :user_id => x[:user_id],:quest_id=> x[:quest_id]).first.update_attributes(answer:x[:answer])
  			end
  		end
  	end
	end



end
