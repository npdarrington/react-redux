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
  const [error, setError] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setNewTodo({ ...newTodo, [name]: value });
  }

  const validateForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!newTodo.title.trim() || !newTodo.description.trim() || !newTodo.dueBy.trim()) {
      setError('You must fill out a title, description and due by date to add a new idea');
      return;
    }
  }

  return (
    <form className="new-todo__form" onSubmit={validateForm}>
      <label htmlFor="title">Title:</label>
      <input type="text" name="title" id="title" className="new-todo__form-input" onChange={handleChange} />
      <label htmlFor="description">Description:</label>
      <input type="text" name="description" id="description" className="new-todo__form-input" onChange={handleChange} />
      <label htmlFor="dueBy">Due By:</label>
      <input type="date" name="dueBy" id="dueBy" className="new-todo__form-input" onChange={handleChange} />
      <button type="submit" className="new-todo__submit">Add To-Do!</button>
      { error && <h2 className="new-todo__form-error">{error}</h2>}
    </form>
  )
}

export default Form;