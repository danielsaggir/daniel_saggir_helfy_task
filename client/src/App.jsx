import { useState, useEffect } from "react";
import { getTasks, toggleTask, deleteTask } from "./api/tasks";
import TaskItem from "./components/TaskItem.jsx";
function App() {
  const [tasks, setTasks] = useState([]);

  const handleToggle = async (id) => {
    const updated = await toggleTask(id);
    setTasks(tasks.map((t) => (t.id === id ? updated : t)));
  };
  
  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((t) => t.id !== id));
  };

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  return (
    <div>
      <h1>Daniel Saggir Helfy Full Stack Task</h1>

        {tasks.map((task) => (
          <TaskItem key={task.id} 
          task={task} 
          onToggle={handleToggle} 
          onDelete={handleDelete} />
        ))}
    </div>
  );
}

export default App;