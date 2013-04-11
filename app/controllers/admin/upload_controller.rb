class Admin::UploadController < ApplicationController

  def show
    @quest = Quest.find(params[:id])
    render :partial => 'show', :layout => false, :locals => { :quest_id => params[:id], :quest_title => @quest.title }
  end

  def edit

    @quest = params[:quest_id]
    @update_quest = Quest.find(@quest).update_attributes(:title => params[:quest_title])
    uploader = UploadProgramUploader.new
    uploader.id_user = @user.id
    uploader.id_quest = @quest
    uploader.store!(params[:file])
    render :partial => 'success_upload', :layout => false, :locals => { :quest_id => @quest}
  end

  def new_load
    render :partial => 'new_load', :layout => false, :locals => { :id => params[:id] }
  end

  def create
    @quest = Quest.create(params[:quest])
    @id = Quest.last[:id]
    uploader = UploadProgramUploader.new
    uploader.id_user = nil
    uploader.id_quest = @id
    uploader.store!(params[:file])
    Answer.create(:answer =>uploader.url , :status => 1, :quest_id => @id )

    render :partial => 'success_upload', :layout => false, :locals => { :quest_id => @id}
  end


end
