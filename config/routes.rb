Rails.application.routes.draw do
  root "dashboards#index"
  devise_for :users, only: :sessions
end
