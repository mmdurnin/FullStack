import React from 'react';
import { Link } from 'react-router-dom';

class FeaturedRestaurantIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="featured-restaurant-icon">
                <Link to={`/restaurants/${this.props.restaurant.id}`}>{this.props.restaurant.name}</Link>
            </div>
        )
    }
}

export default FeaturedRestaurantIndexItem;