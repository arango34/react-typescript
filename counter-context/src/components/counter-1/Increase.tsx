import { useContext } from 'react';
import { CounterContext } from '../../App';

const Increase = () => {
  const context = useContext(CounterContext);

  const [count, dispatch] = context;

  if (!dispatch) return null;

  return (
    <div className='btn-container'>
      <button
        className='btn btn-increase'
        onClick={() => dispatch({ type: 'INCREASE' })}
        disabled={count.count === 10}
      >
        +
      </button>
    </div>
  );
};

export default Increase;
