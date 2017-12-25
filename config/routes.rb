Rails.application.routes.draw do
  root 'dashboards#index'
  namespace :api do
    namespace :admin do
      resources :sessions, only: :create
    end
  end
end
