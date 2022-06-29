import { useContext } from 'react';
import { AppContext } from '../../context/appContext';

import ListItem2 from './ListItem2';

const List2 = () => {
  const { count2, list } = useContext(AppContext);

  return (
    <div className='list-container'>
      {count2 > 0 &&
        list.map((item: number, i: number) => {
          return <ListItem2 key={i} item={item} />;
        })}{' '}
    </div>
  );
};

export default List2;
