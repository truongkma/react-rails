Rails.application.routes.draw do
  namespace :api do
    namespace :admin do
      resources :sessions, only: :create
    end
  end
end
