class UploadController < ApplicationController


	def new
		
		render :partial => 'form', :layout => false, :locals => { :quest_id => params[:quest_id] }

	end

	###
	###  Сделать внесение в базу данных ответа
	###  
	###
	def load
		@quest = params[:quest_id]
		uploader = UploadProgramUploader.new
		uploader.id_user = @user.id
		uploader.id_quest = @quest
		uploader.store!(params[:file])

		#Запись в базу данных адресса как ответ юзера
		user_answer = UserAnswer.where(:user_id => @user.id, :quest_id => @quest).first
		user_answer.update_attributes(:answer => uploader.url, :status => true)

		render :partial => 'load', :layout => false, :locals => { :quest_id => @quest}

	end


end
