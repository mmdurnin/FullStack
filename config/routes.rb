Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    match '/restaurants/featured', to: 'restaurants#featured', via: :get

    resource :session, only:[:create, :destroy, :show]
    resources :restaurants, only:[:index, :show]
    resources :cities, only:[:index]
    resources :reservations, only:[:index, :show, :create, :update, :destroy]
    resources :users, only:[:show, :create]
    
  end

  root to: "static_pages#root"
end
