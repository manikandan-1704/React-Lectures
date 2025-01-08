import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { Footer} from "./components/Footer";
import { AddTask } from "./components/AddTask";
import './App.css';
import { useState } from "react";

function App() {

      const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
      <Footer />
    </div>
  );
}

export default App;