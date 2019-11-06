import React from 'react';
import FeaturedCitiesIndex from './featured_cities_index';
import SearchBarContainer from './search_bar/search_bar_container';

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchCities();
        this.props.fetchRestaurants(this.props.currentCity);
    }

    // featuredCities(){
    //     let featuredCities = [];
    //     this.props.cities.map((city) => {
    //         if (city.id < 7 && city.id > 0) featuredCities.push(city)
    //     })
    //     return featuredCities
    // }

    render(){
        if (this.featuredCities === []) return null;
        return(
            <div>
                <SearchBarContainer />
                {/* <FeaturedRestaurantsIndex restaurants={this.props.restaurants} /> */}
                <FeaturedCitiesIndex cities={this.props.cities} />
            </div>
        )
    }
}

export default Home;