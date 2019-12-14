class Api::ReservationsController < ApplicationController
    before_action :require_login

    def index
        @reservations_all = current_user.reservations.includes(:restaurant).order(id: :desc)
        @reservations = @reservations_all.where('starts_at > ?', DateTime.now)

        render :index
    end

    def show
        @reservation = current_user.reservations.includes(:restaurant).find_by(id: params[:id])

        if @reservation.nil?
            render json: ["Oops! We couldn't find your reservation"], status: 418
            return
        end

        @reservation_date = @reservation.starts_at.strftime("%B/%d/%Y")
        @reservation_time = @reservation.starts_at.strftime("%I:%M %p") 
        
        render :show
    end

    def create

        @reservation = Reservation.new(reservation_params)

        @reservation.user_id = current_user.id

        if reservation_params[:starts_at][0] == " " #this is controllling for an instance where reservation params send up an empty date. Converting to datetime will default the empty value to date.today. Check for empty date by reservation_params[:starts_at] first character is " "
            @reservation.starts_at = ""
        else 
            @reservation.starts_at = reservation_params[:starts_at].to_datetime
            @reservation_date = @reservation.starts_at.strftime("%B/%d/%Y")
            @reservation_time = @reservation.starts_at.strftime("%I:%M %p")
        end

        if @reservation_time == "12:00 AM" # this is controller for an empty time, which defaults to 12:00 AM (kinda hacky but we dont have an option for 12AM -- refactor later)
            @reservation.starts_at = ""
        end

        if @reservation.save     
            render :show
        else
            render json: @reservation.errors.full_messages, status: 418
        end
    end

    def update
        @reservation = Reservation.includes(:restaurant).find_by(id: params[:id])

        if @reservation.user_id != current_user.id 
            render json: ["Oops! This isn't your reservation"], status: 418
            return 
        end

        @reservation.starts_at = reservation_params[:starts_at].to_datetime

        if @reservation.update_attributes(reservation_params)
            render :show
        else
            render json: @reservation.errors.full_messages, status: 418
        end
    end

    def destroy
        @reservation = Reservation.find_by(id: params[:id])
        if @reservation.user_id != current_user.id 
            render json: ["Oops! This isn't your reservation"], status: 418
            return 
        end

        @reservationId = @reservation.id
        @reservation.destroy
        
        render json: @reservationId
    end

    private
    def reservation_params
        params.require(:reservation).permit(:restaurant_id, :starts_at, :num_guests)
    end
end
