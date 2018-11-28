Rails.application.routes.draw do
  post 'likes/create'
  delete 'likes/delete'
  
  #resources :likes,  except: [ :index, :show, :new, :edit, :update, :destroy]
  
  get 'feeds/public'
  get 'feeds/personal'
  get 'feeds/following'

  # resources :feeds, except: [:new, :create, :edit, :update, :destroy] do
  #   collection do
  #     get 'public'
  #     get 'personal'
  #     get 'following'
  #   end
  # end

  get '/profiles/:id', to: 'profiles#show'


  get '/logged_in', to: 'users/logged_in#index'


  get '/features/edit_pro_pic'
  post '/features/save_new_pro_pic'
  get 'features/search_user'


  get '/posts/new'
  post '/posts/create'

  post '/comments/create'
  post '/comments/create_replies'
  get '/comments/fetch_replies'
  get 'comments/fetch_comment'
 
 
  devise_for :users, path: '', path_names: { sign_in: 'login', sign_out: 'logout', password: 'secret', confirmation: 'verification', unlock: 'unblock', registration: 'register', sign_up: 'cmon_let_me_in' }
  
  root to: redirect('/register/cmon_let_me_in')

end
