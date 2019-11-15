import React from 'react';

class ReviewIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
                {this.props.review.username}
            </div>
        )
    }
}

export default ReviewIndexItem;