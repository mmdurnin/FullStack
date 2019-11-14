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
                <div className="home-page-restaurant-name">
                    <div className="featured-restaurant-name">{this.props.restaurant.name}</div>
                    <div className="featured-restaurant-neighborhood">{this.props.restaurant.neighborhood}</div>
                </div>
            </div>
        )
    }
}

export default FeaturedRestaurantIndexItem;