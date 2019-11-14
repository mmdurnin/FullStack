import React from 'react';

class SearchForm extends React.Component{
    constructor(props){
        super(props)

        this.state={
            city: "",
            date: "",
            time: "",
            numPeople: "",
            restaurant: ""
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.fetchRestaurants();
        this.props.fetchCities();
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value})
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        let cityId = 1
        if (this.state.city !== "") {
            cityId = this.state.city
        }
        this.props.history.push(`/restaurants?city_id=${cityId}&time=${this.state.time}&guests=${this.state.numPeople}&date=${this.state.date}&restaurant=${this.state.restaurant}`)
    }

    render(){
        
        //numGuest dropdown options
        const numGuestOptions = [({value: 1, label: "1 guest"})];
        for (let i = 2; i < 13; i++) {
            numGuestOptions.push({value: i, label: `${i} guests`})
        };

        //time drowdown options
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

        return(
            <div >
                <form className="search-form-parent" id="search-form-parent-collapsed" onSubmit={this.handleSubmit}>

                    <div className="search-bar-smooshed">
                        
                        <select 
                            className="search-bar-dropdown"
                            onChange={this.update("city")}
                            placeholder="select a city"
                            value={this.state.city}
                        >
                            <option value="">Select a city:</option>
                            {
                                this.props.cities.map((city, idx) => {
                                    return <option key={idx} value={city.id}>{city.name}</option>
                                })
                            }
                        
                        </select>

                        <label>
                            <input 
                            className="search-bar-input"
                            placeholder="Select date"
                            type="date"
                            />
                        </label>

                        <select 
                            className="search-bar-dropdown"
                            onChange={this.update("time")}  
                        >
                            <option value="">Select time:</option>
                            {
                                timeOptions.map((time, idx) => {
                                    return <option key={idx} value={time}>{time}</option>
                                })
                            }

                        </select>

                        <select
                            className="search-bar-dropdown"
                            onChange={this.update("numPeople")}
                        >
                        <option value="">Table for...</option>
                            {
                                numGuestOptions.map((el, idx) => {
                                    return <option key={idx} value={el.value}>{el.label}</option>
                                })
                            }

                        </select>
                    </div>

                    <label className="search-bar-island">
                        <input 
                        className="search-bar-input"
                        placeholder="Search for a restaurant *"
                        type="text"
                        onChange={this.update("restaurant")}
                        />
                    </label>

                    <input className="submit-search" type="submit" value="Find a table!"/>
                </form>
            </div>
        ) 
        }
    }

    export default SearchForm;