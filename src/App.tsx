import './App.css';

import ToDoList from './containers/ToDoList/ToDoList';

const App: React.FunctionComponent = () => {
  return (
    <main className="App">
      <h1>My To-Do List!</h1>
      <ToDoList />
    </main>
  );
}

export default App;
