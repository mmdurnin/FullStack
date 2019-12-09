Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    match '/restaurants/featured', to: 'restaurants#featured', via: :get
    match '/reviews/user_reviews', to: 'reviews#user_reviews', via: :get

    resource :session, only:[:create, :destroy, :show]
    resources :cities, only:[:index]
    resources :reservations, only:[:index, :show, :create, :update, :destroy]
    resources :users, only:[:show, :create]
    resources :restaurants, only:[:index, :show] do
      resources :reviews, only:[:index, :create, :destroy]
    end
    
  end

  root to: "static_pages#root"
end
