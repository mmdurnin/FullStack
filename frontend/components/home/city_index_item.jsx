import React from 'react'
import { Link } from 'react-router-dom'

class CityIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    getImage(){

    }


    render(){
        return(
            <div className="city-icon-parent-container">
                <div className="city-icon-child-container">
                    <Link to={`/restaurants?city_id=${this.props.city.id}`}>
                        <div className="city-image-icon">
                            <img src={window.cityImages[this.props.image_id]} />
                        </div>
                        <div className="city-image-icon-name">{this.props.city.name}</div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default CityIndexItem;