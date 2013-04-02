class UploadFileController < ApplicationController

	def new

	end
	
	def upload
	uploader = SourceCodeUploader.new
	uploader.test = session[:test_id]
	uploader.user = @user.id
	uploader.quest = session[:questid]
	uploader.store!(params[:file])
	
	end
end