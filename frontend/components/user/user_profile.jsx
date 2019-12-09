import React from 'react';
import UserReservations from './user_reservations/user_reservations_container';
import UserReviews from './user_reviews/user_reviews_container';

class UserProfile extends React.Component{
    constructor(props){
        super(props)

        this.state = {tab: 0}
    }

    selectTab(e, tabNum) {

        const prev = document.querySelector(".active")
        prev.classList.remove("active")
        e.target.classList.add("active")

        this.setState({ tab: tabNum })
    }

    render() {
        if (this.props.user === undefined) return null;

        const currentPageArr = [
            <UserReservations />,
            <UserReviews />
        ]

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
                <div>{currentPageArr[this.state.tab]}</div>
            </div>
        )
    }
}

export default UserProfile;


{/* <div>{el.starts_at}</div>
<div>{el.restaurant_name}</div> */}