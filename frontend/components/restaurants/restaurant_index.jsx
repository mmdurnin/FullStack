import React from 'react';


class RestaurantIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchRestaurants(this.props.cityId)
    }

    render(){
        if (this.props.restaurants === []) return null
        return(
            <div>
                {
                    this.props.restaurants.map((el, i) => {
                        return <li key={i}>{el.name}</li>
                    })
                }
            </div>
        )
    }
}

export default RestaurantIndex;