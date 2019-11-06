import React from 'react'

class CityIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div>{this.props.city.name}</div>
            </div>
        )
    }
}

export default CityIndexItem;