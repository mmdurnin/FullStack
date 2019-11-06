import React from 'react';
import GreetingContainer from './greeting_container';

const Header = () => (
    <div className="header">
        <section className="logo">
            <h3>TableFor2</h3>
        </section>
        <GreetingContainer />
    </div>
)
export default Header;