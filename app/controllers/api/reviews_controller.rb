class Api::ReviewsController < ApplicationController
    
    before_action :require_login, only: [:create]
    
    def index
        @restaurant = Restaurant.find_by(id: params[:restaurant_id])
        @reviews = Review.includes(:user).where(restaurant_id: params[:restaurant_id])
        render :index
    end

    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        @user = User.find_by(id: @review.user_id)

        if @review.save
            @restaurant = Restaurant.find_by(id: params[:restaurant_id])
            @reviews = Review.includes(:user).where(restaurant_id: params[:restaurant_id])
            render :index
        else
            render json: @review.errors.full_messages
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review.user_id != current_user.id 
            render json: ["Oops! This isn't your review"]
            return 
        end

        @review.destroy
        render json: @review.id
    end

    private
    def review_params
        params.require(:review).permit(:restaurant_id, :rating, :body)
    end
end
