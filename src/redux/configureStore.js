import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Homepages } from './homepages';
import { Homedecors } from './homedecors';
import { Automotives } from './automotives';
import { Electronics } from './electronics';
import { Fashions } from './fashions';
import { Outdoors } from './outdoors';
import { Pets } from './pets';
import { Items } from './cartitems';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            homepages: Homepages,
            homedecors: Homedecors,
            automotives: Automotives,
            electronics: Electronics,
            fashions: Fashions,
            outdoors: Outdoors,
            pets: Pets,
            cartitems: Items,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};