import React from 'react'
import { Link } from 'react-router-dom'

class CityIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Link to={`/restaurants?city_id=${this.props.city.id}`}>{this.props.city.name}</Link>
            </div>
        )
    }
}

export default CityIndexItem;