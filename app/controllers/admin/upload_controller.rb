class Admin::UploadController < ApplicationController

  def show
    @quest = Quest.find(params[:id])
    render :partial => 'show', :layout => false, :locals => { :quest_id => params[:id], :quest_title => @quest.title }
  end

  def update
    Upload.update_load(params[:file], params[:id], params[:quest_title])
    render :partial => 'success_upload', :layout => false, :locals => { :quest_id => params[:quest_id]}

  end

  def new_load
    render :partial => 'new_load', :layout => false, :locals => { :id => params[:id] }
  end

  def create
    Upload.create_load(params[:quest], params[:file])
    @id = Quest.last[:id]

    render :partial => 'success_upload', :layout => false, :locals => { quest_id: @id}
  end


end
