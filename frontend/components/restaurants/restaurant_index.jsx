import React from 'react';
import SearchFormContainer from '../home/search_bar/search_form_container'
import RestaurantIndexItem from './restaurant_index_item';
import queryString from 'query-string';

class RestaurantIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchRestaurants(this.props.cityId, this.props.restaurantName);
        this.props.fetchCities();
    }

    componentDidUpdate(prevProps){
        let values = queryString.parse(prevProps.location.search)
        if (values.city_id !== this.props.cityId || values.restaurant !== this.props.restaurantName) {
            this.props.fetchRestaurants(this.props.cityId, this.props.restaurantName);
        }
    }

    render(){
        if (this.props.restaurants === []) return null
        if (this.props.cities.length === 0) return null
        const backgroundStyle = {backgroundImage: 'url(' + window.searchBarCities[this.props.cityId] + ')'};

        let city = this.props.cities[this.props.cityId - 1];
        let cityName = city.name || "";
        let time = this.props.time || "";
        let date = this.props.date || "";
        let guests = this.props.guests || "";
        let restaurant = this.props.restaurant || "";

        if (guests !== "") {
            guests = `Party of ${guests}`
        }

        console.log("this.props.guests")
        console.log(this.props.guests)
        console.log("this.props")
        console.log(this.props)
        return(
            <div className="restaurant-index-window-container">

                <div className="index-search-bar-container" style={backgroundStyle}>
                    <div className="index-search-bar-form">
                        <SearchFormContainer />
                    </div>
                </div>

                <div className="restaurant-index-page-container">

                    <div className="restaurant-index-navbar-container">
                        <div className="sticky-navbar">
                            <div className="price-filter-container">
                                Price:
                                <div className="price-buttons">
                                    <button>$$</button>
                                    <button>$$$</button>
                                    <button>$$$$</button>
                                </div>
                            </div>
                            <div className="cuisine-filter">
                                Cuisine:
                            </div>
                        </div>
                    </div>

                    <div className="restaurant-list-container">
                        <div className="dummie-search-results">
                            <div className="search-results-guide">Your search:</div>
                            <div className="search-results-parameter">{cityName}</div>
                            <div className="search-results-parameter">{time}</div>
                            <div className="search-results-parameter">{date}</div>
                            <div className="search-results-parameter">{guests}</div>
                            <div className="search-results-parameter">{restaurant}</div>
                        </div>
                        {
                            this.props.restaurants.map((el, i) => {
                                return <RestaurantIndexItem key={i} restaurant={el} />
                            })
                        }
                    </div>

                </div>
            </div>
        )
    }
}

export default RestaurantIndex;