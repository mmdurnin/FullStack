import React from 'react';
import { Link } from 'react-router-dom';

class FeaturedRestaurantIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="featured-restaurant-item-container">
                <div className="featured-restaurant-icon-parent">
                    <Link className="featured-restaurant-icon-child" to={`/restaurants/${this.props.restaurant.id}`}><img src={this.props.restaurant.image}/></Link>
                </div>
                <h3>{this.props.restaurant.name}</h3>
            </div>
        )
    }
}

export default FeaturedRestaurantIndexItem;