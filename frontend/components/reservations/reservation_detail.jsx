import React from 'react';
import { Link } from 'react-router-dom';

class ReservationDetail extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            restaurant_id: this.props.reservation.restaurant_id,
            date: this.props.reservation.prefill_date,
            time: this.props.reservation.starts_at_time,
            num_guests: this.props.reservation.num_guests
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    update(field) {
        
        return e => {
            this.setState({[field]:e.currentTarget.value})
        }
    }

    handleSubmit() {
        let dateTime = `${this.state.date}` + ` ` + `${this.state.time}`

        console.log(dateTime)
        console.log(this.state.time)

        this.props.updateReservation({
            id: this.props.reservation.id,
            starts_at: dateTime,
            num_guests: this.state.num_guests
        })
    };



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
                <Link to={`/restaurants/${this.props.reservation.restaurant_id}`}><div className="user-profile-res-restaurant-name">{this.props.reservation.restaurant_name}</div></Link>
                <div className="user-profile-reservation-overview">
                    <div className="user-profile-reservation-overview-sections">
                        <div className="user-profile-res-partyof">{this.props.user.name}, party of: {this.props.reservation.num_guests}</div>
                        <div className="user-profile-res-contact">Retaurant contact info:</div>
                        <div className="user-profile-res-contact">{this.props.reservation.restaurant_phone}</div>
                        <div className="user-profile-res-contact">{this.props.reservation.restaurant_address}</div>
                        <div className="user-profile-res-contact">{this.props.reservation.restaurant_neighborhood}</div>
                    </div>
                    <div className="reservation-info-box">
                        <div className="user-profile-reservation-date">
                            <div>Reservation:</div>
                            <div>{this.props.reservation.starts_at_date}</div>
                            <div>{this.props.reservation.starts_at_time}</div>
                        </div>
                    </div>

                    <div className="update-res-form">
                        <form onSubmit={this.handleSubmit}>
                            <input 
                                className="update-party-size"
                                type="number"
                                onChange={this.update("num_guests")}
                                value={this.state.num_guests}
                                min="1"
                                max="12" 
                            />
                            
                            <input
                            className="update-res-date"
                            value={this.state.date}
                            onChange={this.update("date")}
                            type="date"
                            />

                            <select 
                                className="update-time"
                                value={this.state.time.value} 
                                onChange={this.update("time")}>
                                <option disabled selected value="">{this.state.time}</option>
                                {
                                    timeOptions.map((el, i) => {
                                        return <option key={i} value={el}>{el}</option>
                                    })
                                }
                            </select>

                            <input className="submit-update" type="submit" value="Update reservation"/>
                        </form>
                        <button className="delete-reservation" onClick={() => this.props.deleteReservation(this.props.reservation.id)}>Delete Reservation</button>
                    </div>


                </div>
            </div>
        )
    }
}


export default ReservationDetail;

//  <ReservationForm
//     action={this.props.updateReservation}
//     restaurantId={this.props.reservation.restaurant_id}
//     title={"Update your reservation"}
//     /> 


// const msp = (state) => ({
//     reservations: Object.values(state.entities.reservations),
//     user: state.entities.users[state.session.id]
// })

// const mdp = dispatch => {
//     updateReservation: (reservation) => dispatch(updateReservation(reservation))
// }

// export default connect(msp, mdp)(ReservationDetail)