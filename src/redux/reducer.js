import { HOMEPAGES } from '../shared/homepages';
import { HOMEDECORS } from '../shared/homedecors';
import { AUTOMOTIVES } from '../shared/automotives';
import { ELECTRONICS } from '../shared/electronics';
import { FASHIONS } from '../shared/fashions';
import { OUTDOORS } from '../shared/outdoors';
import { PETS } from '../shared/pets';

export const initialState = {
    homepages: HOMEPAGES,
    homedecors: HOMEDECORS,
    automotives: AUTOMOTIVES,
    electronics: ELECTRONICS,
    fashions: FASHIONS,
    outdoors: OUTDOORS,
    pets: PETS,
};

export const Reducer = (state = initialState, action) => {
    return state;
};