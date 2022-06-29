import { useContext } from 'react';
import { CounterContext } from '../../App';

import './Counter.css';

const Counter = () => {
  const context = useContext(CounterContext);

  const [state] = context;

  return (
    <div className='counter-container'>
      <h1>{state.count}</h1>
    </div>
  );
};

export default Counter;
