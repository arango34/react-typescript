import { useState, useEffect } from 'react';

import Form from './components/Form';
import List from './components/List';
import {} from './types/types';

import './App.css';

const App = () => {
  const [list, setList] = useState<{ id: string; title: string }[] | []>([]);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editId, setEditId] = useState<string>('');

  const handleClick = (): void => {
    setIsHidden(!isHidden);
  };

  const handleDeleteClick = (id: string): void => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    setInput('');
    setIsEditing(false);
    setEditId('');
  };

  const handleEditClick = (id: string): void => {
    setIsEditing(true);
    setEditId(id);
  };

  const setListProp = {
    setList: setList,
    list: list,
    handleClick: handleClick,
    input: input,
    setInput: setInput,
    isEditing: isEditing,
    isHidden,
    editId,
    setEditId,
    setIsEditing,
  };
  const listProp = {
    list: list,
    isHidden: isHidden,
    handleDeleteClick: handleDeleteClick,
    handleEditClick: handleEditClick,
    setInput: setInput,
  };

  return (
    <main>
      <Form {...setListProp} />
      <List {...listProp} />
    </main>
  );
};

export default App;
