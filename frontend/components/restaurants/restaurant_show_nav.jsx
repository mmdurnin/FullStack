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

        return(
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
                    <div><img src={window.parking}/></div>
                    <div>Street/ metered parking</div>
                </div>

                <div className="navbar-item">
                    <div><img src={window.wheelchair}/></div>
                    <div>Wheelchair accessible</div>
                </div>

                <div className="navbar-item">
                    <div><img src={window.attire2}/></div>
                    <div>Casual attire</div>
                </div>

                <div className="navbar-item">
                    <div><img src={window.phone}/></div>
                    <div>{this.props.restaurant.phone_number}</div>
                </div>

                <div className="navbar-item">
                    <div><img src={window.address}/></div>
                    <div>{this.props.restaurant.address}</div>
                </div>

                <div className="navbar-item" id="icon-resize">
                    <div><img src={window.mouse}/></div>
                    <div>{web}</div>
                </div>

                <div className="navbar-item" id="icon-resize">
                    <div><img src={window.hours}/></div>
                    <div>{this.props.restaurant.hours}</div>
                </div>

            </div>
        )
    }
}

export default RestaurantShowNav;