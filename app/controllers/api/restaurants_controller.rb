class Api::RestaurantsController < ApplicationController

    def index
        @restaurants = Restaurant.where(city_id: params[:city_id])
    end

    def show
        if params(:id)
            @restaurant = Restaurant.find_by(id: params[:id])
        else 
    end

    def featured
        @restaurants = Restaurant.where(city_id: 1).limit(6)
    end

end
