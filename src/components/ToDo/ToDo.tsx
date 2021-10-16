import { IToDo } from '../../containers/ToDoList/types';

import './ToDo.css';

const ToDo: React.FunctionComponent<IToDo> = ({ id, title, description, dueBy }) => {
  return (
    <section className="to-do-card">
      <h3 className="to-do-card__title">{title}</h3>
      <h4 className="to-do-card__description">{description}</h4>
      <h4 className="to-do-card__due-by">{dueBy}</h4>
    </section>
  )
} 

export default ToDo;