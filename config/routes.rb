WebsiteOfTests::Application.routes.draw do

  devise_for :users

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
  end

  resource :admin, :controller => :admin, :only => [:show]
  namespace :admin do
    resources :tests do
        member do
          get :results
        end
      end

    resources :quests
    resources :users, :only => [:index] do
      collection do
        post :update_roles
      end
    end
  end

  resources :user
  match 'quests/start/:id/:time'  =>  'quests#start'
  match 'upload_file/new' => 'upload_file#new'
  match 'upload_file/upload' => 'upload_file#upload'
  match 'tests/start/:id'         =>  'tests#start'
  match 'tests/edit/:id'          =>  'test#edit'
  match 'tests/:id?method=delete' =>  'test#destroy'
  match 'quests/start/:id'        =>  'quests#start'
  match 'quests/testing/:id'      =>  'quests#testing'
  match 'quests/finish/:id'       =>  'quests#finish'





  root :to => 'tests#index'

end
