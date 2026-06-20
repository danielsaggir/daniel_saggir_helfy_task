import { useState, useEffect } from "react";
import { getTasks, toggleTask, deleteTask } from "./api/tasks";
import TaskItem from "./components/TaskItem.jsx";
import TaskFilter from "./components/TaskFilter.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

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

  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "active") return !t.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Daniel Saggir Helfy Full Stack Task</h1>
      <TaskFilter onFilterChange={setFilter} />

      <TaskList 
      tasks={filteredTasks} 
      onToggle={handleToggle} 
      onDelete={handleDelete} />

    </div>
  );
}

export default App;