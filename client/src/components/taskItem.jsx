function TaskItem({ task, onToggle, onDelete }) {
    return (
      <div className="task-item">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Priority: {task.priority}</p>
        <p>{task.completed ? "Done" : "Active"}</p>
        <button onClick={() => onToggle(task.id)}>Toggle</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    );
  }
  
  export default TaskItem;