class Admin::QuestsController < ApplicationController

  def index
    @quests = Quest.all
  end

  def show
    @test = Test.find(params[:id])
    @quests = Quest.find_all_by_test_id(@test)
  end

  def new
    #
    @quest = Quest.new
    @author = @user
  end

  def edit
    @quest = Quest.find(params[:id])
  end

  def create
    @quest = Quest.create(params[:quest])
    @id = Quest.last[:id]
    @answers = params[:answer]
    @status = params[:status]
    @i = @answers.length-1

    for @j in 0..@i
      if @status.include?(@j.to_s) || @quest[:tip_vop]==3
         Answer.create(:answer => @answers[@j], :status => 1, :quest_id => @id)
      else
        Answer.create(:answer => @answers[@j], :status => 0, :quest_id => @id)
      end
    end





    respond_to do |format|
      if @quest.save
        format.html { redirect_to admin_quests_path, notice: 'Quest was successfully created.' }
        format.json { render json: admin_quests_path, status: :created, location: admin_quests_path }
      else
        format.html { render action: "new" }
        format.json { render json: @quest.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @quest = Quest.find(params[:id])

    respond_to do |format|
      if @quest.update_attributes(params[:quest])
        format.html { redirect_to admin_quest_path(@quest.test_id), notice: 'Quest was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @quest.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @quest = Quest.find(params[:id])
    @answer = Answer.find_all_by_quest_id(@quest.id)
    @quest.destroy
    @answer.each do |a|
      a.destroy
    end
    redirect_to admin_quest_path(@quest.test_id)
  end

end


