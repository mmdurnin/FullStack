import React from 'react';

class RestaurantDetail extends React.Component{
    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
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

        return(
            <div className="restaurant-show-window">

                <div className="restaurant-show-header">
                </div>

                <div className="restaurant-show-page">

                    <div className="restaurant-show-main-container">
                        <div className="show-main-options">
                            <div>Summary</div>
                            <div>Photos</div>
                            <div>General Info</div>
                            <div>Reviews</div>
                        </div>
                        <div className="show-main-content-container">
                            {this.props.restaurant.name}
                        </div>
                    </div>

                    <div className="restaurant-show-nav-container">
                        <div className="restaurant-show-reservation-container">
                            <div className="reservation-container-header">Make a reservation</div>
                            <div className="reservation-container-content">
                                <form onSubmit={this.handleSubmit}>

                                    <div className="reservation-form-section">
                                        <label>Party Size</label>
                                    </div>

                                    <div className="reservation-form-section res-datetime">
                                        <label>Date</label>
                                        <label>Time</label>
                                    </div>

                                    <div className="reservation-form-section">
                                        <input type="submit" value="Confirm Reservation"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaurantDetail;