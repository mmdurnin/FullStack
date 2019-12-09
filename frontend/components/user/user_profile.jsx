import React from 'react';
import UserReservations from './user_reservations/user_reservations_container';

class UserProfile extends React.Component{
    constructor(props){
        super(props)

        this.state = {tab: 0}
    }

    selectTab(e, tabNum) {
        console.log("tab was selected")
        this.setState({ selectedTab: tabNum })

        const prev = document.querySelector(".active")
        prev.classList.remove("active")
        e.target.classList.add("active")
    }

    render() {
        if (this.props.user === undefined) return null;

        return(
            <div className="profile-page-window-container">
                <div className="profile-greeting-container">
                    <div className="profile-greeting">{this.props.user.name}</div>
                    <div className="profile-greeting-nav">
                        <button onClick={(e) => this.selectTab(e, 0)} id="profile-greeting-nav" className="active" >RESERVATIONS</button>
                        <button onClick={(e) => this.selectTab(e, 1)} id="profile-greeting-nav" >REVIEWS</button>
                        {/* <button onClick={this.selectTab(2)} id="profile-greeting-nav" className="active" >RESERVATIONS</button> */}
                    </div>
                </div>
                <UserReservations />
            </div>
        )
    }
}

export default UserProfile;


{/* <div>{el.starts_at}</div>
<div>{el.restaurant_name}</div> */}