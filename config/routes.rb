Rails.application.routes.draw do
  root "admin#index"
  namespace :api do
    namespace :admin do
      resources :sessions, only: :create
    end
  end
end
