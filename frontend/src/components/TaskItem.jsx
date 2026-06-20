function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span className={`priority priority-${task.priority}`}>
        {task.priority}
      </span>
      <p>{task.completed ? "Done" : "Pending"}</p>
      <button onClick={() => onToggle(task.id)}>Toggle</button>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
