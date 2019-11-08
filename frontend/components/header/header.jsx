import React from 'react';
import GreetingContainer from './greeting_container';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="header">
        <section className="logo">
            <div className="logo-img">
                <Link to="/" ><img src={window.logo} /></Link>
                </div>
            <h3 className="logo-name">TableFor2</h3>
        </section>
        <GreetingContainer />
    </div>
)
export default Header;