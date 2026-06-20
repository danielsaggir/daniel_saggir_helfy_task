import { useState, useEffect } from "react";
import { getTasks, toggleTask, deleteTask, createTask, updateTask } from "./services/tasks";
import TaskFilter from "./components/TaskFilter.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleToggle = async (id) => {
    setError(null);
    try {
      const updated = await toggleTask(id);
      setTasks(tasks.map((t) => (t.id === id ? updated : t)));
    } catch {
      setError("Could not toggle task");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this task?")) return;
    setError(null);
    try {
      await deleteTask(id);
      setTasks(tasks.filter((t) => t.id !== id));
      if (editingTask?.id === id) setEditingTask(null);
    } catch {
      setError("Could not delete task");
    }
  };

  const handleCreate = async (task) => {
    setError(null);
    try {
      const newTask = await createTask(task);
      setTasks([...tasks, newTask]);
    } catch {
      setError("Could not create task");
    }
  };

  const handleUpdate = async (taskData) => {
    setError(null);
    try {
      const updated = await updateTask(editingTask.id, {
        title: taskData.title,
        description: taskData.description,
        completed: editingTask.completed,
        priority: taskData.priority,
      });
      setTasks(tasks.map((t) => (t.id === editingTask.id ? updated : t)));
      setEditingTask(null);
    } catch {
      setError("Could not update task");
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  useEffect(() => {
    getTasks()
      .then(setTasks)
      .catch(() => setError("Could not load tasks"))
      .finally(() => setLoading(false));
  }, []);

  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Daniel Saggir Helfy Full Stack Task</h1>
      <TaskFilter onFilterChange={setFilter} />
      <TaskForm
        taskToEdit={editingTask}
        onSubmit={editingTask ? handleUpdate : handleCreate}
        onCancel={() => setEditingTask(null)}
      />

      {error && <p className="error-msg">{error}</p>}

      {loading ? (
        <p className="loading-msg">Loading tasks...</p>
      ) : (
        <TaskList
          tasks={filteredTasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
}

export default App;
