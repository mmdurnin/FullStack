import React from 'react'

class ReservationFrom extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="restaurant-show-reservation-container" id="resized-reservation-form">
                <div className="reservation-container-header">Make a reservation</div>
                <div className="reservation-container-form">
                    <form onSubmit={this.handleSubmit}>

                        <div id="section">
                            <label>Party Size</label>
                        </div>

                        <div id="section" className="restaurant-show-section-row">
                            <label className="reservation-datetime">
                                <div>Date:</div>
                                <input 
                                type="text"
                                placeholder="Select Date"/>
                            </label>
                            <label className="reservation-datetime">
                                <div>Time:</div>
                                <input 
                                type="text"
                                placeholder="Select Time"/>
                            </label>
                        </div>

                        <div id="section">
                            <input type="submit" value="Confirm Reservation" className="restaurant-show-res-submit"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ReservationFrom;