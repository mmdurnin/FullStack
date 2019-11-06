import React from 'react';
import CityIndexItem from './city_index_item';

class FeaturedCitiesIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(

            <div>
                <ul>
                    {
                        this.props.cities.map((el, id) => {
                            return <CityIndexItem key={id} city={el} />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default FeaturedCitiesIndex;