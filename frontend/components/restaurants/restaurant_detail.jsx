import React from 'react';

class RestaurantDetail extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.restaurantId !== this.props.match.params.restaurantId) {
          this.props.fetchRestaurant(this.props.match.params.restaurantId);
        }
    }

    render(){
        if (this.props.restaurant == null) return null;

        return(
            <div>{this.props.restaurant.name}</div>
        )
    }
}

export default RestaurantDetail;