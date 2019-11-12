import React from 'react'

class ReservationDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchReservation(this.props.reservation.id)
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <div className="user-profile-res-restaurant-name">{this.props.reservation.restaurant_name}</div>
                <div className="user-profile-reservation-overview">
                    <div className="user-profile-reservation-overview-sections">
                        <div className="user-profile-res-partyof">{this.props.user.name}, party of: {this.props.reservation.num_guests}</div>
                        <div className="user-profile-res-contact">Retaurant contact info:</div>
                        <div className="user-profile-res-contact">{this.props.reservation.restaurant_phone}</div>
                    </div>
                    <div className="user-profile-reservation-date">
                        <div>Reservation: {this.props.reservation.starts_at_date}</div>
                        <div>{this.props.reservation.starts_at_time}</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ReservationDetail;