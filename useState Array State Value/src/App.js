import './App.css';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, name: 'React Lectures', completed: false },
    { id: 2, name: 'useState Lectures', completed: true },
    { id: 3, name: 'States Lectures', completed: false },
  ]
  );
  return (
    <div className='App'>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.id} - {task.name}</span>
            <button className = 'delete'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;