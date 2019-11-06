import configureStore from './store/store';
import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/root';

import { fetchCities } from './actions/city_actions';
import { fetchRestaurant, fetchRestaurants } from './actions/restaurant_actions';


document.addEventListener("DOMContentLoaded", () => {

    
    const rootEl = document.getElementById("root");
    
    let store;
    if (window.currentUser) {
        const { currentUser } = window;
        const { id } = currentUser;
        const preloadedState = {
            entities: {
                users: {
                    [id]: currentUser
                }
            },
            session: { id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    window.getState = store.getState;
    window.fetchCities = ()=> store.dispatch(fetchCities);
    window.fetchRestaurant = (restaurantId) => store.dispatch(fetchRestaurant(restaurantId));
    window.fetchRestaurants = store.dispatch(fetchRestaurants);
    
    ReactDOM.render(<Root store={store} />, rootEl)
});