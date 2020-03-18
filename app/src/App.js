import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';
// Styles
import './App.css';
// Components
import Beaches from './components/Beaches';
import Alerts from './components/Alerts';

const store = createStore(reducer,applyMiddleware(thunk)); 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hawaii Ocean Safety</h1>
        <Alerts />
        <Beaches />
      </div>
    </Provider>
  );
}

export default App;
