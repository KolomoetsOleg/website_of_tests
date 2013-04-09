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

    resources :quests do
      member do
        post :create
      end
    end
    resources :users, :only => [:index] do
      collection do
        post :update_roles
      end
    end
  end

  resources :user
 
 resources :test 

  #match 'tests/edit/:id'          =>  'test#edit'
  #match 'tests/:id?method=delete' =>  'test#destroy'
  ### Костыльность роутов поменять
 

controller :test_using do
  match 'test_using/show/:id'    =>  :show
  match 'test_using/start/:id'   =>  :start
  match 'test_using/testing'     =>  :testing
  match 'test_using/finish'      =>  :finish
end

controller :upload do
  match 'upload/load'  => :load
  match 'upload/new/:quest_id'  => :upload
end
  



  root :to => 'test_using#index'

end
