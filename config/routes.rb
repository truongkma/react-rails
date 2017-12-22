Rails.application.routes.draw do
  root 'home_page#index'

  namespace :api do
    namespace :admin do
      resources :sessions, only: :create
    end
  end
end
