WebsiteOfTests::Application.routes.draw do

  devise_for :users
 #get "/assets/bootstrap-responsive.css"
  

  resources :tasks, :only => [:index] do
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
    resources :tasks do
        member do
          get :results
        end
      end
    resources :upload do
      member do
        post :update
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
        get :attempt
        put :to_default
        get :answer_result
      end
      collection do
        post :update_roles
      end
    end
  end

controller :test_using do
  match 'test_using/show/:id'    =>  :show
  match 'test_using/start/:id'   =>  :start
  match 'test_using/testing'     =>  :testing
  match 'test_using/finish'      =>  :finish
end


  match 'upload/load'  => 'upload#load'
  match 'upload/new/:quest_id'  => 'upload#new'



  root :to => 'test_using#index'

end
