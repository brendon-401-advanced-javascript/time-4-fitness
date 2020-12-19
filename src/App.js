import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store.js';
import Workout from './components/workout.js';
import './style.scss';


function App() {
  return (
    <Provider store={store}>
      <Workout/>
    </Provider>
  );
}

export default App;
