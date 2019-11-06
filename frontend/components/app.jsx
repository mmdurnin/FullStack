import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';

// import SignupUserContainer from './session/signup_user_container';
// import LoginUserContainer from './session/login_user_container';
import Modal from './modal/modal'
import Header from './header/header';
import Home from './home/home_container';

const App = () => (
    <div>
        <Modal />
        <Header />
        <Route path="/" component={Home} />
    </div>
);

export default App;