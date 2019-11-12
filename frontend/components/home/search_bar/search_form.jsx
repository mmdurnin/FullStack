import React from 'react';
import Dropdown from 'react-dropdown'

class SearchForm extends React.Component{
    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.state={
            city: "",
            date: "",
            time: "",
            numPeople: "",
            restaurant: ""
        }

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

    updateDropDown(field) {
        return e => {
            this.setState({ [field]: e.value})
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/restaurants?city_id=${this.state.city}&time=${this.state.time}&guests=${this.state.numPeople}&date=${this.state.date}&restaurant=${this.state.restaurant}`)
    }

    render(){

        // city dropdown options
        const cityOptions = [];
        this.props.cities.map((el) => {
            cityOptions.push({value: el.id, label: el.name})
        });
        
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
                <form className="search-form-parent" onSubmit={this.handleSubmit}>
                    <div className="search-bar-smooshed">
                        
                        <Dropdown 
                            className="search-bar-dropdown"
                            options={cityOptions}
                            value={cityOptions[this.state.city - 1]}
                            onChange={this.updateDropDown("city")} 
                            placeholder="Select a city" 
                        />

                        <label>
                            <input 
                            className="search-bar-input"
                            placeholder="Select date"
                            type="date"
                            />
                        </label>

                        <Dropdown 
                            className="search-bar-dropdown"
                            options={timeOptions}
                            value={timeOptions[this.state.time - 1]}
                            onChange={this.updateDropDown("time")}  
                            placeholder="Time"
                        />

                        <Dropdown 
                            className="search-bar-dropdown"
                            options={numGuestOptions}
                            value={numGuestOptions[this.state.numPeople - 1]}
                            onChange={this.updateDropDown("numPeople")} 
                            placeholder="Table for... "  
                        />
                    </div>

                    <label className="search-bar-island">
                        <input 
                        className="search-bar-input"
                        placeholder="Search for a restaurant *"
                        type="text"
                        //    onChange={this.update("restaurant")}
                        />
                    </label>

                    <input className="submit-search" type="submit" value="Find a table!"/>
                </form>
            </div>
        ) 
        }
    }

    export default SearchForm;