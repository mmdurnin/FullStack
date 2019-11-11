import React from 'react';

class RestaurantShowNav extends React.Component{
    constructor(props){
        super(props)

        this.getWebsite = this.getWebsite.bind(this);
    }

    getWebsite(){
        let condensedName = this.props.restaurant.name.split().join("")
        condensedName = condensedName.concat(".com")
        return condensedName.toLowerCase();
    }

    render() {

        if (this.props.restaurant == null) return null;

        let web = (this.props.restaurant.website)
        if (web === "") web = this.getWebsite();

        const price = {
            1: "$",
            2: "$$",
            3: "$$$",
            4: "$$$$",
            5: "$$$$$"
        }

        return(
            // cuisine
            // neighborhood
            // payment methods
            // parking
            // wheelchair access
            // attire
            // phone
            // address
            // website
            <div className="navbar-overview-container">

                <div className="navbar-item">
                    <div><img src={window.cuisineIcon} /></div>
                    <div>(cuisine placeholder)</div>
                </div>

                <div className="navbar-item">
                    <div><img src={window.neighborhood}/></div>
                    <div>{this.props.restaurant.neighborhood}</div>
                </div>

                <div className="navbar-item">
                    <div><img src={window.payment}/></div>
                    <div>AMEX, Discover, MasterCard, Visa</div>
                </div>

                <div className="navbar-item">
                    <div></div>
                    <div></div>
                </div>

                <div className="navbar-item">
                    <div></div>
                    <div></div>
                </div>

                <div className="navbar-item">
                    <div></div>
                    <div></div>
                </div>

                <div className="navbar-item">
                    <div></div>
                    <div></div>
                </div>

                <div className="navbar-item">
                    <div></div>
                    <div></div>
                </div>

            </div>
        )
    }
}

export default RestaurantShowNav;