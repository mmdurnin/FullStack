import React from 'react';
import ReservationFormContainer from '../reservations/reservation_form';
import RestaurantOverview from './restaurant_overview';
import RestaurantShowNav from './restaurant_show_nav';

class RestaurantDetail extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.restaurantId !== this.props.match.params.restaurantId) {
          this.props.fetchRestaurant(this.props.match.params.restaurantId);
        }
    }

    render(){
        if (this.props.restaurant == null) return null;
        console.log(this.props)
        return(
            <div className="restaurant-show-window">

                <div className="restaurant-show-header">
                    {/* <img src={window.background_show} alt=""/> */}
                </div>

                <div className="restaurant-show-page">

                    <div className="restaurant-show-main-container">
                        <div className="show-main-options">
                            <div>Summary</div>
                            <div>Photos</div>
                            <div>General Info</div>
                            <div>Reviews</div>
                        </div>


                        <div className="restaurant-show-name" id="section">{this.props.restaurant.name}</div>

                        <div className="restaurant-show-summary-section" id="section">
                            <div className="restaurant-show-main-section-title">Summary</div>
                            <div className="restaurant-show-summary">{this.props.restaurant.summary}</div>
                        </div>

                        <div className="restaurant-show-image-section" id="section">
                            <div className="restaurant-show-main-section-title">Photos</div>
                            <div className="restaurant-show-image-container">
                                <img src={this.props.restaurant.image}/>
                            </div>
                        </div>

                        <div id="section">
                            <RestaurantOverview restaurant={this.props.restaurant} />
                        </div>

                        <div className="restaurant-show-reviews-section" id="section">
                            <div className="restaurant-show-main-section-title">Reviews</div>
                            (placeholder)
                        </div>

                    </div>

                    <div className="restaurant-show-nav-container">
                        <ReservationFormContainer
                        restaurant={this.props.restaurant}
                        restaurantId={this.props.restaurant.id}
                        fetchReservation={this.props.fetchReservation}
                        action={this.props.createReservation}
                        loggedIn={this.props.loggedIn}
                        user={this.props.user}
                        openModal={this.props.openModal}
                        history={this.props.history}
                        title={"Make a reservation"}
                        errors={this.props.errors}
                        restaurant={this.props.restaurant}
                        />
                        <RestaurantShowNav restaurant={this.props.restaurant} />
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaurantDetail;

