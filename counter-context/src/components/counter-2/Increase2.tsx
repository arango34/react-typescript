import { useContext } from 'react';
import { AppContext } from '../../context/appContext';

const Increase2 = () => {
  const { count2, increaseCount } = useContext(AppContext);

  return (
    <div className='btn-container'>
      <button
        className='btn btn-increase'
        onClick={increaseCount}
        disabled={count2 === 10}
      >
        +
      </button>
    </div>
  );
};

export default Increase2;
