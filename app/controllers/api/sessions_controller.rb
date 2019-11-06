class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render :show
        else
            render json: ["Invalid credentials. Give it another shot!"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
        else
            render json: ["You have to sign in before you can sign out!"], status: 404
        end
    end

end
