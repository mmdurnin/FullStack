import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        var searchBarImg = document.getElementById("search-bar");
        var fadeComplete = function(e) { searchBarImg.appendChild(arr[0]); };
        var arr = searchBarImg.getElementsByTagName("img");
        for(var i=0; i < arr.length; i++) {
            arr[i].addEventListener("animationend", fadeComplete, false);
        }
    }


    render(){
        const images = [];
        for(let i = 0; i < 4; i++) {
            images.push(<img key={i} src={window.searchbarImages[i]} />)
        }
        return(
            <div id="purple-screen">
                <div id="search-bar">
                    {images}
                </div>
            </div>
        )
    }
}

export default SearchBar;