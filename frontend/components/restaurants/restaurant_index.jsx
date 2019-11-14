import React from 'react';
import SearchFormContainer from '../home/search_bar/search_form_container'
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchRestaurants(this.props.cityId, this.props.restaurantName)
    }

    render(){
        if (this.props.restaurants === []) return null
        const backgroundStyle = {backgroundImage: 'url(' + window.searchBarCities[this.props.cityId] + ')'};
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
                        <div className="dummie-search-results">Your search:
                            {/* <div>{this.props.}</div> */}
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

// cityId: values.city_id,
// time: values.time,
// date: values.date,
// guests: values.guests,
// restaurant: values.restaurant,
// restaurants: Object.values(state.entities.restaurants),