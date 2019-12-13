import React from 'react';

class ReservationForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            restaurant_id: this.props.restaurantId,
            date: "",
            time: "",
            num_guests: ""
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    update(field) {
        
        return e => {
            this.setState({[field]:e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let dateTime = `${this.state.date}` + ` ` + `${this.state.time}`
        console.log(dateTime)

        if (this.props.loggedIn) {
            this.props.action({
                restaurant_id: this.state.restaurant_id,
                starts_at: dateTime,
                num_guests: this.state.num_guests
            }).then(() => this.props.history.push("/profile")).fail(() => this.render());

        } else {
            this.props.openModal('login')
        }
    };
    


    render() {
        if (this.props.restaurantId === undefined) return null;

        const timeOptions = ["12:00 PM", "12:30PM"];
        let time;
        for (let i = 1; i < 12; i++) {
            for (let j = 0; j < 2; j++) {
                time = "";
                time = time.concat(`${i}`)

                if (j === 0) {
                    time = time.concat(":00 PM")
                } else {
                    time = time.concat(":30 PM")
                }
                
                timeOptions.push(time)
            }
        }

        return (
            <div className="restaurant-show-reservation-container" id="resized-reservation-form">
                <div className="reservation-container-header">Make a reservation</div>
                <div className="reservation-container-form">
                    <form onSubmit={this.handleSubmit}>

                        <div id="section">
                            <label className="res-dropdown">
                                <input 
                                onChange={this.update("num_guests")}
                                className="reservation-party-size"
                                type="number"
                                placeholder="Party size"
                                value={this.state.num_guests}
                                min="1"
                                max="12" />
                            </label>

                        </div>

                        <div id="section" className="restaurant-show-section-row">

                            <label className="reservation-datetime">
                                <div>Date:</div>
                                <input
                                value={this.state.date}
                                onChange={this.update("date")}
                                type="date"
                                placeholder="Select date"/>
                            </label>

                            <label className="reservation-datetime">
                                <div>Time:</div>
                                <select value={this.state.time.value} onChange={this.update("time")}>
                                    <option value="">Select time</option>
                                    {
                                        timeOptions.map((el, i) => {
                                            return <option key={i} value={el}>{el}</option>
                                        })
                                    }
                                </select>
                            </label>

                        </div>
                        
                        <div className="create-reservation-errors">
                            <ul>
                                {
                                    this.props.errors.map((error, i)=> {
                                        return <li key={i}>{error}</li>
                                    })
                                }
                            </ul>
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

export default ReservationForm;

