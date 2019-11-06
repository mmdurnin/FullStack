import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }

    componentDidMount(){
        this.props.fetchCities();
        this.props.fetchRestaurants(1);
    }

    render(){
        if (!this.props.cities) return null;
        return(
            <ul>
                {
                    this.props.cities.map((el, id) => {
                        return <li>
                            {el.name }
                            <br/>
                        </li>
                    })
                }
            </ul>
        )
    }
}

export default Home;