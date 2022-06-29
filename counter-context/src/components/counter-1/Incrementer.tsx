import Increase from './Increase';
import Decrease from './Decrease';

import './Incrementer.css';

const Incrementer = () => {
  return (
    <div className='incrementer-container'>
      <Decrease />
      <Increase />
    </div>
  );
};

export default Incrementer;
