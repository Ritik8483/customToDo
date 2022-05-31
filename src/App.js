import logo from './logo.svg';
import './App.css';
import ToDoTitle from './toDoComponent/ToDoTitle';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <ToDoTitle>Add your tasks here</ToDoTitle>
      <Toaster/>
    </div>
  );
}

export default App;
