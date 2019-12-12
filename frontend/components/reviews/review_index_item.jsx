import React from 'react';

class ReviewIndexItem extends React.Component {
    constructor(props){
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
            <div id="section" className="review-item-container">
                <div className="review-item-toptext">
                    <div className="review-item-username">{this.props.review.username}</div>
                    <div className="review-item-created-at">{this.props.review.created_at}</div>
                    <div className="special-stars">{ratings[this.props.review.rating]}</div>
                </div>

                <div className="review-item-body">
                    {this.props.review.body}
                </div>
            </div>
        )
    }
}

export default ReviewIndexItem;