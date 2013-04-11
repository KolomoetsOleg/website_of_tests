class Test < ActiveRecord::Base

  scope :active, :conditions => {:active => true}

  attr_accessible :active, :author_id, :kol_pop, :time, :title, :description

  has_many :quests
  has_many :rezults

  validates :title,   :presence => true
  validates :kol_pop, :numericality => {:greater_than => 0, :less_than => 11}
  validates :time,    :numericality => {:greater_than => 0}

 end