import React from 'react';
import UserReviewDetail from '../../reviews/user_review_detail';

class UserReviews extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchUserReviews();
    }

    render () {

        if (this.props.reviews === undefined) return null;

    return(
        <div>
            <ul className="profile-sub-container-parent">
                {
                    this.props.reviews.map((el, i) => {
                        return <li key={i} className="profile-sub-container">
                            <img src={el.restaurant_image} alt="" />
                            <div className="profile-tabitem-info">
                                <UserReviewDetail review={el} />
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    )}
}

export default UserReviews;