Rails.application.routes.draw do
  get 'feeds/public'
  get 'feeds/personal'
  get 'feeds/following'
  get 'features/search_user'
  get '/profiles/:id', to: 'profiles#show'
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # root new_user_session_url
  get '/logged_in', to: 'users/logged_in#index'
  get '/features/edit_pro_pic'
  post '/features/save_new_pro_pic'
  get '/posts/new'
  post '/posts/create'
  devise_for :users, path: '', path_names: { sign_in: 'login', sign_out: 'logout', password: 'secret', confirmation: 'verification', unlock: 'unblock', registration: 'register', sign_up: 'cmon_let_me_in' }
  


  # resources :feeds, except: [:new, :create, :edit, :update, :destroy] do
  #   collection do
  #     get 'public'
  #     get 'personal'
  #     get 'following'
  #   end
  # end
  


  root to: redirect('/register/cmon_let_me_in')
end
