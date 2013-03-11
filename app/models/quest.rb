class Quest < ActiveRecord::Base
  attr_accessible :tip_vop, :title, :test_id
  belongs_to :test
  has_many :answer


  #def chek (answer_user, id_t) # Хеш ответов пользователя, id testa
  	
  #	ans_r = Answer.find_by_sql("SELECT id FROM answers
  #INNER JOIN orders ON clients.id = orders.client_id
  #ORDER clients.created_at desc")


  #end

end
