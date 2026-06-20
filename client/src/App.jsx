import { useState, useEffect } from "react";
import { getTasks } from "./api/tasks";
import {taskItem} from "./components/taskItem";
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  return (
    <div>
      <h1>Daniel Saggir Helfy Full Stack Task</h1>

        {tasks.map((task) => (
          <taskItem key={task.id}>
            {task.title}
            {task.description}
            {task.completed}
            {task.priority}
            {task.createdAt}
          </taskItem>  
        ))}
    </div>
  );
}

export default App;