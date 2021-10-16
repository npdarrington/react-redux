import { useState } from 'react';

import ToDo from '../../components/ToDo/ToDo';

import { IToDo } from './types';

import './ToDoList.css';

const ToDoList: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<IToDo[]>([
    {
      id: 1,
      title: 'test 1',
      description: 'description 1',
      dueBy: '12/24/21'
    }
  ]);

  const displayToDos = (): React.ReactNode | HTMLHeadingElement => {
    return todos.length > 0 ? (
      todos.map((todo: IToDo) => {
        return (
          <ToDo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            dueBy={todo.dueBy}
          />)
      })
    ) : (
      <h2>You're To-Do List is empty. Awesome!! Let's add some more!</h2>
    )
  }

  return (
    <section className="todo-list-container">
      { displayToDos() }
    </section>
  )
} 

export default ToDoList;