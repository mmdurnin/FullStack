require 'Date'

class Api::ReservationsController < ApplicationController
    def index
        @reservations = current_user.reservations.includes(:restaurant)

        render :index
    end

    def show
        @reservation = current_user.reservations.includes(:restaurant).find_by(id: params[:id])

        # @date_year = @reservation.starts_at.year
        # @date_month = @reservation.starts_at.month
        # @date_day = @reservation.starts_at.day 
        # @date_hour = @reservation.starts_at.hour 
        # @date_min = @reservation.starts_at.minutes

        @reservation_date = @reservation.starts_at.strftime("%B/%d/%Y")
        @reservation_time = @reservation.starts_at.strftime("%I:%M %p") 
        
        render :show
    end

    def create
        @reservation = Reservation.new(reservation_params)

        @reservation.user_id = current_user.id
        @reservation.starts_at = params(:starts_at).to_datetime

        if @reservation.save
            render :show
        else
            render json: @reservation.errors.full_messages
        end
    end

    def update
        @reservation = reservation.find_by(id: params(:id))
        @reservation.starts_at = reservation_params[:starts_at].to_datetime

        if @reservation.update_attributes(reservation_params)
            render :show
        else
            render json: @reservation.errors.full_messages
        end
    end

    def destroy
        @reservation = reservation.find_by(id: params(:id))
        @reservationId = @reservation.id
        @reservation.destroy!
        render json: @reservationId
    end

    private
    def reservation_params
        params.require(:reservation).permit(:restaurant_id, :starts_at, :num_guests)
    end
end
