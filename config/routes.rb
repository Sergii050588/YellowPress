Rails.application.routes.draw do
  root 'posts#index'

  devise_for :admins, :skip => [:registrations],
  controllers: { sessions: 'admins/sessions' }

  resources :posts, :categories, except: [:destroy]
end
