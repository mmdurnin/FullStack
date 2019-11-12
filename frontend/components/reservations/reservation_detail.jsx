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

        const timeOptions = ["12:00 PM", "12:30PM"];
        let time;
        for (let i = 1; i < 12; i++) {
            for (let j = 0; j < 2; j++) {
                time = "";
                time = time.concat(`${i}`)

                if (j === 0) {
                    time = time.concat(":00 PM")
                } else {
                    time = time.concat(":30 PM")
                }
                
                timeOptions.push(time)
            }
        }
        
        return(
            <div>
                <div className="user-profile-res-restaurant-name">{this.props.reservation.restaurant_name}</div>
                <div className="user-profile-reservation-overview">
                    <div className="user-profile-reservation-overview-sections">
                        <div className="user-profile-res-partyof">{this.props.user.name}, party of: {this.props.reservation.num_guests}</div>
                        <div className="user-profile-res-contact">Retaurant contact info:</div>
                        <div className="user-profile-res-contact">{this.props.reservation.restaurant_phone}</div>
                        <div className="user-profile-res-contact">{this.props.reservation.restaurant_address}</div>
                        <div className="user-profile-res-contact">{this.props.reservation.restaurant_neighborhood}</div>
                    </div>
                    <div className="user-profile-reservation-date">
                        <div>Reservation:</div>
                        <div>{this.props.reservation.starts_at_date}</div>
                        <div>{this.props.reservation.starts_at_time}</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ReservationDetail;