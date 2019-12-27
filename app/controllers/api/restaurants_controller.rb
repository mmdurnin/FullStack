class Api::RestaurantsController < ApplicationController

    def index
        search_key = params[:restaurant_name].downcase
        @restaurants = Restaurant.where(city_id: params[:city_id]).where("lower(name) like ?", "%#{search_key}%").with_attached_image
    end

    def show
        @restaurant = Restaurant.find_by(id: params[:id])
    end

    def featured
        @restaurants = Restaurant.where(city_id: 1).limit(6)
    end

end
