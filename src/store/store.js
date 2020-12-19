import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import workoutsReducer from './workouts.js';

const store = () => {
  return createStore( workoutsReducer, composeWithDevTools() );
};

export default store();