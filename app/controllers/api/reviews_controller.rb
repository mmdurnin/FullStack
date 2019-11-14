class Api::ReviewsController < ApplicationController

    def index
        @restaurant = Restaurant.find_by(id: params[:restaurant_id])
        @reviews = Review.includes(:user).where(restaurant_id: params[:restaurant_id])
        render :index
    end

    def create
        before_action :require_login
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        @user = User.find_by(id: @review.user_id)

        if @review.save
            render :index
        else
            render json: @review.errors.full_messages
    end

    private
    def review_params
        params.require(:review).permit(:restaurant_id, :rating, :body)
    end
end
