import { IToDo } from '../../containers/ToDoList/types';

import './ToDo.css';

const ToDo: React.FunctionComponent<IToDo> = ({ id, title, description, dueBy }) => {
  return (
    <section className="todo-card">
      <h3 className="todo-card__title">{title}</h3>
      <h4 className="todo-card__description">{description}</h4>
      <h4 className="todo-card__due-by">Due Date: {dueBy}</h4>
    </section>
  )
} 

export default ToDo;