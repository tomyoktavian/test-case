import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App m-5">
      <div className="container">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
