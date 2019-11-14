import React from 'react';
import ReservationDetail from '../reservations/reservation_detail';

class UserProfile extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchReservations();
    }

    render() {

        if (this.props.reservations === []) return null;
        if (this.props.user === undefined) return null;


        return(
            <div className="profile-page-window-container">
                <div className="profile-greeting-container">
                    <div className="profile-greeting">{this.props.user.name}</div>
                    <div className="profile-greeting-nav">
                        <div id="profile-greeting-nav">RESERVATIONS</div>
                    </div>
                </div>
                <ul className="profile-sub-container-parent">
                    {
                        this.props.reservations.reverse().map((el, i) => {
                            return <li key={i} className="profile-sub-container">
                                        <img src={el.restaurant_image} alt=""/>
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

export default UserProfile;


{/* <div>{el.starts_at}</div>
<div>{el.restaurant_name}</div> */}