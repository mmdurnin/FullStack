import React from 'react';
import ReservationDetail from '../../reservations/reservation_detail';

class UserReservations extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchReservations();
    }

    render() {

        if (this.props.user === undefined) return null;
        if (this.props.reservations === []) return null;

        return (
            <div>
                <ul className="profile-sub-container-parent">
                    {
                        this.props.reservations.reverse().map((el, i) => {
                            return <li key={i} className="profile-sub-container">
                                <img src={el.restaurant_image} alt="" />
                                <div className="profile-res-info">
                                    <ReservationDetail
                                        reservation={el}
                                        user={this.props.user}
                                        deleteReservation={this.props.deleteReservation}
                                        updateReservation={this.props.updateReservation}
                                    />
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default UserReservations;