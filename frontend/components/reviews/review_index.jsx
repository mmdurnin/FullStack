import React from 'react';

class ReviewIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchReviews(this.props.restaurant.id)
    }

    render() {
        // if (this.props.reviews.length === 0) return null;

        

        return(

            <div className="review-index-container">
                <div><div><div></div></div></div>
            </div>

        )
    }

}

export default ReviewIndex;