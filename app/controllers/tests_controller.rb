class TestsController < ApplicationController
  # GET /tests
  # GET /tests.json
  def index
    @tests = Test.find_all_by_active(1)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @tests }
    end
  end

  # GET /tests/1
  # GET /tests/1.json
  def show
    @test = Test.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @test }
    end
  end

  def start
    @test = Test.find(params[:id])
    session[:test_id] = params[:id]
    @rezult = Rezult.where(:user_id => session["warden.user.user.key"][1].first, :test_id => session[:test_id]).first
    if @rezult.nil?
      @rezult = Rezult.new
      @rezult.save
    end
    session[:quest_id] = nil #Хранение id вопросов  
    session[:answer_id] = nil # Хранение ответов на вопрос
    quest_id = Array.new
    answer_id = Hash.new
    @test.quest.each { |quest| 
                        quest_id << { quest.id => 0 }
                      }
    session[:quest_id] = quest_id
    session[:answer_id] = answer_id
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @test }
    end
  end


  # GET /tests/new
  # GET /tests/new.json
  def new
    @test = Test.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @test }
    end
  end

  # GET /tests/1/edit
  def edit
    @test = Test.find(params[:id])
    @test.author_id = session["warden.user.user.key"][1].first
  end

  # POST /tests
  # POST /tests.json
  def create


    @test = Test.new(params[:test])

    respond_to do |format|
      if @test.save
        format.html { redirect_to @test, notice: 'Test was successfully created.' }
        format.json { render json: @test, status: :created, location: @test }
      else
        format.html { render action: "new" }
        format.json { render json: @test.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /tests/1
  # PUT /tests/1.json
  def update
   update = Hash.new
   update = params[:test]
   update[:time] = Time.new(update.delete("time(1i)"), update.delete("time(2i)"), update.delete("time(3i)"), update.delete("time(4i)"), update.delete("time(5i)"))
   @test = Test.find(params[:id])
    respond_to do |format|
    if @test.update_attributes(update)
     format.html { redirect_to @test, notice: 'Test was successfully updated.' }
     format.json { head :no_content }
     else
       format.html { render action: "edit" }
       format.json { render json: @test.errors, status: :unprocessable_entity }
     end
    end
  end

  # DELETE /tests/1
  # DELETE /tests/1.json
  def destroy
    @test = Test.find(params[:id])
    @test.destroy

    respond_to do |format|
      format.html { redirect_to adminpage_path }
      format.json { head :no_content }
    end
  end
end
