class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            p @user 
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        # @user = User.find_by(id: params[:id])
        @user = current_user
        render :show
    end

    private
    def user_params
        params.require(:user).permit(:name, :email, :password)
    end
end
