import React from 'react';
import SearchFormContainer from '../home/search_bar/search_form_container'


class RestaurantIndex extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }

    componentDidMount(){
        this.props.fetchRestaurants(this.props.cityId)
    }

    render(){
        if (this.props.restaurants === []) return null

        // const backgroundStyle = `background-image: image_url("/cities/searchbar_cities/searchbar_${cityId}.jpg");`
        const backgroundStyle = {backgroundImage: 'url(' + window.searchBarCities[this.props.cityId] + ')'};
        

        return(
            <div>
                <div className="index-search-bar-container" style={backgroundStyle}>
                    <div className="index-search-bar-form">
                        <SearchFormContainer />
                    </div>
                </div>
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