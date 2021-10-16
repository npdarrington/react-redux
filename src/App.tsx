import './App.css';

import Form from './components/Form/Form';
import ToDoList from './containers/ToDoList/ToDoList';

const App: React.FunctionComponent = () => {
  return (
    <main className="App">
      <h1>My To-Do List!</h1>
      <Form />
      <ToDoList />
    </main>
  );
}

export default App;
