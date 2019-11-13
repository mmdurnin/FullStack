import React from 'react'
import ReservationForm from './reservation_form';
import { Link } from 'react-router-dom';

class ReservationDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)

        return(
            <div>
                <Link to={`/restaurants/${this.props.reservation.restaurant_id}`}><div className="user-profile-res-restaurant-name">{this.props.reservation.restaurant_name}</div></Link>
                <div className="user-profile-reservation-overview">
                    <div className="user-profile-reservation-overview-sections">
                        <div className="user-profile-res-partyof">{this.props.user.name}, party of: {this.props.reservation.num_guests}</div>
                        <div className="user-profile-res-contact">Retaurant contact info:</div>
                        <div className="user-profile-res-contact">{this.props.reservation.restaurant_phone}</div>
                        <div className="user-profile-res-contact">{this.props.reservation.restaurant_address}</div>
                        <div className="user-profile-res-contact">{this.props.reservation.restaurant_neighborhood}</div>
                    </div>
                    <div>
                        <div className="user-profile-reservation-date">
                            <div>Reservation:</div>
                            <div>{this.props.reservation.starts_at_date}</div>
                            <div>{this.props.reservation.starts_at_time}</div>
                        </div>
                        <button className="delete-reservation" onClick={() => this.props.deleteReservation(this.props.reservation.id)}>Delete Reservation</button>
                    </div>
                    {/* <div> */}
                        <ReservationForm
                        action={this.props.updateReservation}
                        restaurantId={this.props.reservation.restaurant_id}
                        />
                    {/* </div>   */}
                </div>
            </div>
        )
    }
}


export default ReservationDetail;