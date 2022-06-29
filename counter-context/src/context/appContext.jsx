import React, { createContext, Dispatch, Reducer, useReducer } from 'react';
import reducer from './reducer';

const initialState2 = { count2: 0, list: [] };
//[InitialState, Dispatch<IAction> | null]
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState2);

  const increaseCount = () => {
    dispatch({ type: 'INCREASE' });
  };

  const decreaseCount = () => {
    dispatch({ type: 'DECREASE' });
  };

  return (
    <AppContext.Provider value={{ ...state, increaseCount, decreaseCount }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
