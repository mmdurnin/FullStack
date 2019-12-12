import React from 'react';
import { Link } from 'react-router-dom';

class UserReviewDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const ratings = {
            1: <div><i className="fas fa-star"></i></div>,
            2: <div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>,
            3: <div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>,
            4: <div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>,
            5: <div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
        };


        return(
            <div>
                <Link to={`/restaurants/${this.props.review.restaurant_id}`}><div className="user-profile-restaurant-name">{this.props.review.restaurant_name}</div></Link>
                <div className="review-item-container">
                    <div className="user-profile-tabitem-overview">
                        <div>{this.props.review.created_at_date}</div>
                        <div>{this.props.review.created_at_time}</div>
                        <div className="special-stars">{ratings[this.props.review.rating]}</div>
                    </div>
                    <div className="user-profile-tabitem-overview profile-review-body">"{this.props.review.body}"</div>
                </div>
            </div>
        )
    }
}


export default UserReviewDetail;