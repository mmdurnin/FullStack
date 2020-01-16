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
        const orderedReviews = this.props.reviews.reverse()

    return(
        <div className="profile-sub-container-grandparent">
            <ul className="profile-sub-container-parent">
                {
                    orderedReviews.map((el, i) => {
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