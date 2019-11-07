import React from 'react';
import CityIndexItem from './city_index_item';

class FeaturedCitiesIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(

            <div>
                <h3 className="home-icon-title">Featured Cities</h3>
                <div className="featured-cities-parent-container">
                    <ul className="featured-cities-child-container">
                        {
                            this.props.cities.map((el, id) => {
                                return <CityIndexItem key={id} image_id={id} city={el} />
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default FeaturedCitiesIndex;