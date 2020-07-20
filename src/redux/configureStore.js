import {createStore, combineReducers} from 'redux';
import { Homepages } from './homepages';
import { Homedecors } from './homedecors';
import { Automotives } from './automotives';
import { Electronics } from './electronics';
import { Fashions } from './fashions';
import { Outdoors } from './outdoors';
import { Pets } from './pets';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            homepages: Homepages,
            homedecors: Homedecors,
            automotives: Automotives,
            electronics: Electronics,
            fashions: Fashions,
            outdoors: Outdoors,
            pets: Pets
        })
    );

    return store;
};