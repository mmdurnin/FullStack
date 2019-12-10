import React from 'react';
import SearchFormContainer from '../home/search_bar/search_form_container'
import RestaurantIndexItem from './restaurant_index_item';
import queryString from 'query-string';

class RestaurantIndex extends React.Component{
    constructor(props){
        super(props)

        this.state = {price: "", cuisine: []}

        this.handleCheck = this.handleCheck.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
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

    handlePrice(event) {
        return this.setState({ price: event.target.value })
    }

    handleCheck(event) {
       if (event.target.checked) {
           event.target.value = true
           const tempArr = this.state.cuisine.concat(event.target.id)
           this.setState({cuisine: tempArr})
       } else {
           const idx = this.state.cuisine.indexOf(event.target.id)
           const tempArr = this.state.cuisine
           delete tempArr[idx]
           event.target.value = false
           this.setState({cuisine: tempArr})
       }
       console.log(this.state)
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
        let price = this.state.price
        let cuisine = this.state.cuisine.join(" ")


        if (guests !== "") {
            guests = `Party of ${guests}`
        }

        const cuisineChecks = [
            "Burgers",
            "Italian",
            "Sushi",
            "Greek",
            "Has beer",
            "Finger foods",
            "French",
            "Top rated",
            "Sandwiches",
            "Seafood",
            "Casual",
            "Breakfast",
            "Mexican",
            "Fried food",
            "Southern comfort",
            "Soup",
            "Burmese",
            "Ramen",
            "Vegan",
            "Gluten-free options"            
        ];


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
                                    <button value="$$" onClick={(e) => this.handlePrice(e)} >$$</button>
                                    <button value="$$$" onClick={(e) => this.handlePrice(e)} >$$$</button>
                                    <button value="$$$$" onClick={(e) => this.handlePrice(e)} >$$$$</button>
                                </div>
                            </div>
                            <div className="cuisine-filter column">
                                <div className="row">
                                    <img src={window.cuisineIcon} />
                                    <div>Cuisine:</div>
                                </div>
                                <form className="cuisine-checkbox column">
                                    {
                                        cuisineChecks.map((el, i) => {
                                            return <li key={i}>
                                                <label>
                                                    <input id={el} type="checkbox" value="false" onClick={(e) => this.handleCheck(e, el)} />
                                                    <span class="checkbox-disguise"></span>
                                                    {el}
                                                </label>
                                            </li>
                                        })
                                    }
                                </form>
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
                            <div className="search-results-parameter">{price}</div>
                            <div className="search-results-parameter">{cuisine}</div>

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