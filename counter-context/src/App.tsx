import { createContext, Dispatch, useReducer } from 'react';
import { reducer, initialState } from './reducer';

import Incrementer from './components/counter-1/Incrementer';
import Counter from './components/counter-1/Counter';
import List from './components/counter-1/List';
import Counter2 from './components/counter-2/Counter2';
import Incrementer2 from './components/counter-2/Incrementer2';
import List2 from './components/counter-2/List2';

import './App.css';

export const CounterContext = createContext<
  [{ count: number; countLog: number[] }, Dispatch<any> | null]
>([initialState, null]);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={[state, dispatch]}>
      <section>
        <Counter />
        <Incrementer />
      </section>
      <List />
      <section>
        <Counter2 />
        <Incrementer2 />
      </section>
      <List2 />
    </CounterContext.Provider>
  );
}

export default App;
