import { useState } from 'react';

import './Form.css';

interface INewTodo {
  title: string,
  description: string,
  dueBy: string
}

const Form = () => {
  const [newTodo, setNewTodo] = useState<INewTodo>({
    title: '',
    description: '',
    dueBy: ''
  });

  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <form className="new-todo__form" onSubmit={validateForm}>
      <label htmlFor="title">Title:</label>
      <input type="text" name="title" id="title" className="new-todo__form-input" />
      <label htmlFor="description">Description:</label>
      <input type="text" name="description" id="description" className="new-todo__form-input" />
      <label htmlFor="dueBy">Due By:</label>
      <input type="datetime" name="dueBy" id="dueBy" className="new-todo__form-input" />
      <button type="submit" className="new-todo__submit">Add To-Do!</button>
    </form>
  )
}

export default Form;