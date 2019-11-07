import React from 'react';

class RestaurantDetail extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchRestaurants
    }

    render(){
        return(
            <div></div>
        )
    }
}

export default RestaurantDetail;