import React, { LegacyRef, SetStateAction } from 'react';
import { useState, useEffect, useRef } from 'react';
import {} from '../types/types';

import './Form.css';

type FormState = {
  setList: (list: { id: string; title: string }[]) => void;
  list: { id: string; title: string }[];
  handleClick: () => void;
  input: string;
  setInput: (input: string) => void;
  isEditing: boolean;
  isHidden: boolean;
  editId: string;
  setEditId: (id: string) => void;
  setIsEditing: (isEditing: false) => void;
};

const Form = ({
  setList,
  list,
  handleClick,
  input,
  setInput,
  isEditing,
  isHidden,
  editId,
  setEditId,
  setIsEditing,
}: FormState) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.currentTarget.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();

    if (isEditing) {
      if (input && input.length > 0) {
        const newList: { id: string; title: string }[] = list.map((item) => {
          if (item.id === editId) {
            item.title = input;
          }
          return item;
        });

        setList(newList);
        setInput('');
        setIsEditing(false);
        setEditId('');
      }
    } else {
      if (input && input.length > 0) {
        const listItem = { id: Math.random().toString(), title: input };
        setList([...list, listItem]);
        setInput('');
      }
    }
  };

  return (
    <section className='form-section' onSubmit={handleSubmit}>
      <form>
        <div className='form-container'>
          <label className='input-label' htmlFor='todo-input'>
            Enter Todo:{' '}
          </label>
          <div className='input-container'>
            <input
              type='text'
              name='todo-input'
              value={input!}
              onChange={handleChange}
            />
            <button type='submit' className='btn-submit'>
              {isEditing ? 'Edit' : 'Submit'}
            </button>
          </div>
          <div className='btn-hide-container'>
            {list.length > 0 && (
              <button type='button' className='btn-hide' onClick={handleClick}>
                {isHidden ? 'Show List' : 'Hide List'}
              </button>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
