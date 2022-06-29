import { useContext } from 'react';
import { CounterContext } from '../../App';

const Deacrease = () => {
  const context = useContext(CounterContext);

  const [count, dispatch] = context;

  if (!dispatch) return null;

  return (
    <div className='btn-container'>
      <button
        className='btn btn-decrease'
        onClick={() => dispatch({ type: 'DECREASE' })}
        disabled={count.count === 0}
      >
        -
      </button>
    </div>
  );
};

export default Deacrease;
