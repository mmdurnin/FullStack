import React from 'react';

class RestaurantOverview extends React.Component {

    constructor(props) {
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
            <div className="restaurant-show-overview-section" >
                <div className="restaurant-show-main-section-title">General Info</div>
                <div className="overview-icons-container">

                    <div className="overview-icon-header">
                        <div className="summary-subsection-header">{this.props.restaurant.name}</div>
                        <div className="summary-subsection-dollars">{price[this.props.restaurant.pricing]}</div>
                        <div/><div/>
                    </div>
                    
                    <div className="overview-icon-child">
                        <div className="summary-subsection-title">Phone Number:</div>
                        <div className="summary-subsection-description">{this.props.restaurant.phone_number}</div>
                    </div>

                    <div className="overview-icon-child">
                        <div className="summary-subsection-title">Address:</div>
                        <div className="summary-subsection-description">{this.props.restaurant.address}</div>
                    </div>

                    <div className="overview-icon-child">
                        <div className="summary-subsection-title">Website:</div>
                        <div className="summary-subsection-description website">{web}</div>
                    </div>

                    <div className="overview-icon-child">
                        <div className="summary-subsection-title">Hours:</div>
                        <div className="summary-subsection-description">{this.props.restaurant.hours}</div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default RestaurantOverview