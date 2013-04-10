WebsiteOfTests::Application.routes.draw do

  devise_for :users
 #get "/assets/bootstrap-responsive.css"
  resources :answers
  resources :posts

  resources :tests, :only => [:index] do
    member do
      get :start
    end
  end

  
  resources :users, :only => [] do
    member do
      get :rezult
    end
    collection do
      get :not_allowed
    end
  end

  resource :admin, :controller => :admin, :only => [:show]
  namespace :admin do
    resources :tests do
        member do
          get :results
        end
      end
    resources :upload do
      member do
        get :new_load
      end
    end
    resources :quests do
      member do
        post :create
      end
    end
    resources :users, :only => [:index] do
      member do
        get :results
      end
      collection do
        post :update_roles
      end
    end
  end

  resources :user
 
  match 'tests/edit/:id'          =>  'test#edit'
  match 'tests/:id?method=delete' =>  'test#destroy'
  ### Костыльность роутов поменять
 

  match 'test_using/show/:id'       =>  'test_using#show'
  match 'test_using/start/:id'       =>  'test_using#start'
  match 'test_using/testing'       =>  'test_using#testing'
  match 'test_using/finish'       =>  'test_using#finish'
  match 'upload/load'  => 'upload#load'
  match 'upload/new/:quest_id'  => 'upload#new'



  root :to => 'test_using#index'

end
