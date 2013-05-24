FactoryGirl.define do

  factory :user do
   email "sobaka@mail.ru"
   password "123456789"
   password_confirmation "123456789"
   f_name "ilya"
   l_name "lozer"
  end

  factory :test do
  	active 0
  	author_id 1
  	kol_pop 5
  	time 15
  	title "Test for Rspec"
  	description "A simple description"
  end

  factory :rezult do
  	user_id 1
  	test_id 1
  	attempt 1
  	bal 100
  end
  
end
