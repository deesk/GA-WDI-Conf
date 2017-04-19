Rails.application.routes.draw do
  get '/graph', to: 'surveys#graph'
  get '/report', to: 'surveys#report'

  post '/', to: 'surveys#create'

  root 'surveys#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
