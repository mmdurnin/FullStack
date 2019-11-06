import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';

// import SignupUserContainer from './session/signup_user_container';
// import LoginUserContainer from './session/login_user_container';
import Header from './header/header';
import Modal from './modal/modal'

const App = () => (
    <div>
        <Modal />
        <Route path="/" component={Header} />
    </div>
);

export default App;