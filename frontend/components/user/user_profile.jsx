import React from 'react';

class UserProfile extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchReservations();
    }

    render() {

        if (this.props.reservations === []) return null;

        console.log(this.props)

        return(
            <div>
                <div>Reservations</div>
                <ul>
                    {
                        this.props.reservations.map((el, i) => {
                            return <li key={i}>
                                        <div>{el.restaurant_name}</div>
                                        <img src={el.restaurant_image} alt=""/>
                                    </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default UserProfile;