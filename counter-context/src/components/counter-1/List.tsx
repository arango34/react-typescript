import { useContext } from 'react';
import { CounterContext } from '../../App';

import ListItem from './ListItem';

import './List.css';

const List = () => {
  const context = useContext(CounterContext);

  const [state, dispatch] = context;

  if (!dispatch) return null;

  return (
    <div className='list-container'>
      {state.countLog.map((item, i) => {
        return <ListItem key={i} item={item} />;
      })}
    </div>
  );
};

export default List;
