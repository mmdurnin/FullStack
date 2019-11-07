import React from 'react';

class Greeting extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="greeting">
                {!!(this.props.loggedIn) ? (
                    <div className="greeting-loggedin-session-nav">
                        <h1>Hi, {this.props.user.name}</h1>
                        <button onClick={()=> this.props.logout()}>Log Out</button>
                    </div>
                ) : (
                    <nav className="greeting-session-nav">
                        <button className="button-greeting-signup" onClick={() => {this.props.openModal('signup')}}>Sign Up</button>
                        <button className="button-greeting-login" onClick={()=> {this.props.openModal('login')}}>Log In</button>
                    </nav>
                )}

            </div>
        )
    }
}


export default Greeting;