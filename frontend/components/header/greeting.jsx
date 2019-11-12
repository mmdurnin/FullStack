import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="greeting">
                {!!(this.props.loggedIn) ? (
                    <div className="greeting-loggedin-session-nav">
                        <h1>Hi There!</h1>
                        <button><Link to="/profile">{this.props.user.name}</Link></button>
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