import React from 'react';

class SearchForm extends React.Component{
    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.state={
            city: "San Francisco",
            date: "",
            numPeople: 0,
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

    // getRestaurantByName(name){
    //     if (this.props.restaurants === []) return null;

    //     const names = []
    //     this.props.restaurants.map((el) => {
    //         names.push(el.name)
    //     })

    //     if (names.includes(name)) {
    //         return 
    //     }
    // }


    handleSubmit() {
        // this.props.fetchRestaurants(this.state.city.id)
        //     .then(this.props.history.push(`/restaurants/${this.props.restaurant.id}`))
        console.log("this is surprisingly working, here are the props")    
        console.log(this.props)
    }

    render(){
       return(
           <div >
               <form className="search-form-parent" onSubmit={this.handleSubmit}>
                   <div className="search-bar-smooshed">
                    <label >
                        <input 
                        className="search-bar-input"
                        placeholder="Select city"
                        type="text"
                        />
                    </label>

                    <label >
                        <input 
                        className="search-bar-input"
                        placeholder="Select date and time"
                        type="text"
                        />
                    </label>

                    <label >
                        <input 
                        className="search-bar-input"
                        placeholder="Number of people"
                        type="text"
                        />
                    </label>
                   </div>

                   <label className="search-bar-island">
                       <input 
                       className="search-bar-input"
                       placeholder="Search for a restaurant"
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