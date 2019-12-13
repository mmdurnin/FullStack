import React from 'react';
import UserReservations from './user_reservations/user_reservations_container';
import UserReviews from './user_reviews/user_reviews_container';

class UserProfile extends React.Component{
    constructor(props){
        super(props)

        this.state = {tab: 0}
    }

    selectTab(e, tabNum) {

        const previousTab = document.querySelector(".active")
        previousTab.classList.remove("active")
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
            <div className="profile-window">
                <div className="full">
                    <div className="profile-greeting">{this.props.user.name}</div>
                    <div className="profile-greeting-nav">
                        <button onClick={(e) => this.selectTab(e, 0)} className="active" >RESERVATIONS</button>
                        <button onClick={(e) => this.selectTab(e, 1)} >REVIEWS</button>
                    </div>
                </div>
                <div>{currentPageArr[this.state.tab]}</div>
            </div>
        )
    }
}

export default UserProfile;
