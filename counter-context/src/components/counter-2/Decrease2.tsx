import { useContext } from 'react';
import { AppContext } from '../../context/appContext';

const Decrease2 = () => {
  const { count2, decreaseCount } = useContext(AppContext);

  return (
    <div className='btn-container'>
      <button
        className='btn btn-decrease'
        onClick={decreaseCount}
        disabled={count2 === 0}
      >
        -
      </button>
    </div>
  );
};

export default Decrease2;
