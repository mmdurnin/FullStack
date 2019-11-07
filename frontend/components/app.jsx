import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link
  } from 'react-router-dom';

import Modal from './modal/modal'
import Header from './header/header';
import HomeContainer from './home/home_container';
import RestaurantDetailContainer from './restaurants/restaurant_detail_container';
import RestaurantIndexContainer from './restaurants/restaurant_index_container';

const App = () => (
    <div>
        <Modal />
        <Header />
        <Switch>
            <Route path="/restaurants/:restaurantId" component={RestaurantDetailContainer} />
            <Route path="/restaurants" component={RestaurantIndexContainer} />
            <Route path="/" component={HomeContainer} />
        </Switch>
    </div>
);

export default App;