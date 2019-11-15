import configureStore from './store/store';
import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/root';




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
    
    ReactDOM.render(<Root store={store} />, rootEl)
});