import React from 'react';
import SearchBarContainer from './search_bar/search_bar_container';
import FeaturedCitiesIndex from './featured_cities_index';
import FeaturedRestaurantsIndex from './featured_restaurants_index';


class Home extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchCities();
        this.props.fetchFeaturedRestaurants();
    }

    render(){
        if (this.props.cities === []) return null;
        if (this.props.featuredRestaurants === []) return null;
        
        return(
            <div>
                <SearchBarContainer />
                <div className="home-content-container">
                    <FeaturedRestaurantsIndex restaurants={this.props.featuredRestaurants} />
                    <FeaturedCitiesIndex cities={this.props.cities} />
                </div>
            </div>
        )
    }
}

export default Home;