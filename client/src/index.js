import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const Context = createContext(null)
const someValue = {};

ReactDOM.render(
    <Context.Provider value={someValue}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

