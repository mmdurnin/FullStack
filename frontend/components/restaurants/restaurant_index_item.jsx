import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const translatePricing = {
            1: '$',
            2: '$$',
            3: '$$$',
            4: '$$$$',
            5: '$$$$$'
        }

        const starText = {
            1: "",
            1.5: "",
            2: "",
            2.5: "",
            3: "Up and coming",
            3.5: "Up and coming",
            4: "Pretty good!",
            4.5: "So good!",
            5: "Superb!"

        }

        const rating = 4.5; // replace later with rating props
        const stars = [];
        for (let i = 0; i < Math.floor(rating); i++) {
            stars.push(<img key={i} src={window.fullStar} />)
        }
        if (rating % 1 != 0) {
            stars.push(<div key={6} className="last-star"><img src={window.halfStar} /></div>)
        }

        return(
            <div className="restaurant-index-item-container">

                <div className="index-item-image-container">
                    <Link to={`/restaurants/${this.props.restaurant.id}`} ><img src={this.props.restaurant.image}/></Link>
                </div>

                <div className="index-item-overview-container">
                    <div className="restaurant-item-header">
                        <Link to={`/restaurants/${this.props.restaurant.id}`} ><h3 className="restaurantTitle">{this.props.restaurant.name}</h3></Link>
                        <h4 className={'index-restaurant-item-pricing'}>{translatePricing[this.props.restaurant.pricing]}</h4>
                    </div>

                    <div className="overview-rating">
                        <div className="rating-subtext">People are saying: {starText[rating]}</div>
                        <div className="rating-stars">{stars}</div>
                    </div>

                    <h4 className="index-item-neighborhood">Neighborhood: {this.props.restaurant.neighborhood}</h4>

                    <h4 className="index-item-overview-bookstat">Booked 0 times today</h4>

                    <div className="buttons-container">
                        <div className="restaurant-index-reservation-buttons">
                            <button>5:30PM</button>
                            <button>6:00PM</button>
                            <button>6:30PM</button>
                            <button>7:00PM</button>
                        </div> 
                        <Link to={`/restaurants/${this.props.restaurant.id}`} ><h5 className="restaurant-item-button-subtext">More Options...</h5></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaurantIndexItem;