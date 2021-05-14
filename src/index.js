import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import userStore from './store/userStore';

// чтобы прокидывать состояния mobx в компоненты
export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
      user: new userStore()
    }}>
      <App />
    </Context.Provider>,
  document.getElementById('root')
);

