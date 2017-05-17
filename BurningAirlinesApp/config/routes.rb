Rails.application.routes.draw do
  root 'pages#app'
  get '/app' => 'pages#app'
  get '/search' => 'pages#app'

  resources :users
  resources :reservations
  resources :flights
  resources :planes


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
