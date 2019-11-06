import React from 'react';

class Cities extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchCities();
        this.props.fetchRestaurants(1);
    }

    render(){
        return(

        )
    }
}

export default Cities;