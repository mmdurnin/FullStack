import React from 'react';
import GreetingContainer from './greeting_container';

const Header = () => (
    <div className="header">
        <section className="logo">
            <div className="logo-img"><img src={window.logo} /></div>
            <h3 className="logo-name">TableFor2</h3>
        </section>
        <GreetingContainer />
    </div>
)
export default Header;