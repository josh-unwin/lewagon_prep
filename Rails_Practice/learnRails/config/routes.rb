Rails.application.routes.draw do
  # Index page:
  root 'pages#home'

  get 'pages/about'
  get 'pages/home'
  get 'pages/contacts'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
