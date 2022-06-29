import React from 'react';
import ListItem from './ListItem';

import './List.css';
import {} from '../types/types';

type ListState = {
  list: { id: string; title: string }[];
  isHidden: boolean;
  handleDeleteClick: (id: string) => void;
  handleEditClick: (id: string) => void;
  setInput: (input: string) => void;
};

const List = ({
  list,
  isHidden,
  handleDeleteClick,
  handleEditClick,
  setInput,
}: ListState) => {
  return (
    <section className='list-section'>
      {!isHidden && (
        <div className='list-container'>
          <ul className='list'>
            {list.map((listItem, i) => {
              const listItemProp = {
                listItem: listItem,
                handleDeleteClick: handleDeleteClick,
                handleEditClick: handleEditClick,
                setInput: setInput,
              };
              return <ListItem key={i} {...listItemProp} />;
            })}
          </ul>
        </div>
      )}
    </section>
  );
};

export default List;
