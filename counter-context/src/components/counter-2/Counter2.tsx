import { useContext } from 'react';
import { AppContext } from '../../context/appContext';

const Counter2 = () => {
  const { count2 } = useContext(AppContext);

  return (
    <div className='counter-container'>
      <h1>{count2}</h1>
    </div>
  );
};

export default Counter2;
