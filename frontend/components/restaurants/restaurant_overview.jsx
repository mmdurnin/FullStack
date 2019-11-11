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

        return(
            <div>
                <div className="restaurant-show-main-section-title">General Info</div>
                (paceholder)
            </div>
        )
    }
}

export default RestaurantOverview

/*
address: "2019 Red Maple Drive"
city_id: 1
dress_code: "Casual"
hours: "MON-THURS: 5:30 PM - 10:30PM / FRI-SAT: 3:30 PM - 12:00AM / SUN: (closed); (visit website for holiday hours)"
id: 497
image: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBJQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7c492f8c220e3a30807054a24065644bf7c50618/res_26.jpg"
name: "Meiji"
neighborhood: "Japantown/ Western Edition"
phone_number: "(415)767-2676"
pricing: 3
summary: "Enjoy Japanese entertainment in Japantowns historic music hall. You can see action dramas featuring traditional Japanese themes such as Tengu and Zashiki-warashi. Your heart will pound in excitement as the show unfolds in close proximity, with the cast occasionally even coming down to the audience from the stage. The commitment to cuisine shows in the Funemori where you can taste fresh seafood from Toyosu Market and the Seasonal Hot Pot made with specialty homemade broth. A variety of dishes such as Smoked Sliced Duck and Pollack Potato Salad are available"
payment method
ratings
dining style

*/