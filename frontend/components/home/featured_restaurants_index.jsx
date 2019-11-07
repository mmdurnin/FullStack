import React from 'react'
import FeaturedRestaurantIndexItem from './featured_restaurant_index_item';

class FeaturedRestaurantsIndex extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h3 className="home-icon-title">Featured Restaurants in San Francisco</h3>
                <ul>
                    {
                        this.props.restaurants.map((el, i) => {
                            return <FeaturedRestaurantIndexItem key={i} restaurant={el} />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default FeaturedRestaurantsIndex;