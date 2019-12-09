import React from 'react';

class UserReviews extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchUserReviews();
    }

    render () {

        if (this.props.reviews === undefined) return null;
        
        const ratings = {
            1: <div><i class="fas fa-star"></i></div>,
            2: <div>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>,
            3: <div>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>,
            4: <div>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>,
            5: <div>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        };

        console.log(this.props)

    return(
        <div></div>
    )}
}

export default UserReviews;