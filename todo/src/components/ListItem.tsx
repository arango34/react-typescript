import React from 'react';

import './ListItem.css';

type ListItemState = {
  listItem: { id: string; title: string };
  handleDeleteClick: (id: string) => void;
  handleEditClick: (id: string) => void;
  setInput: (input: string) => void;
};

const ListItem = ({
  listItem,
  handleDeleteClick,
  handleEditClick,
  setInput,
}: ListItemState) => {
  const { id, title } = listItem;
  return (
    <li>
      <div className='list-item-container'>
        <h1>{title}</h1>
        <div className='btns-container'>
          <div className='btns'>
            <button
              className='btn-edit'
              onClick={() => {
                handleEditClick(id);
                setInput(title);
              }}
            >
              Edit
            </button>
            <button
              className='btn-delete'
              onClick={() => handleDeleteClick(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
