class Upload < ActiveRecord::Base

  def self.create_load(quest, file)
    Quest.create(quest)
    @id = Quest.last[:id]
    uploader = UploadProgramUploader.new
    uploader.id_quest = @id
    uploader.store!(file)
    Answer.create(:answer =>uploader.url , :status => 1, :quest_id => @id )
  end

  def self.update_load(file, id, title)
    Quest.find(id).update_attributes(:title => title)
    uploader = UploadProgramUploader.new
    uploader.id_quest = id
    uploader.store!(file)
  end

end