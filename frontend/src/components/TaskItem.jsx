function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-item-top">
        <h3>{task.title}</h3>
        <span className={`priority priority-${task.priority}`}>
          {task.priority}
        </span>
      </div>
      {task.description && <p className="task-desc">{task.description}</p>}
      <span className={`task-status ${task.completed ? "done" : "pending"}`}>
        {task.completed ? "Done" : "Pending"}
      </span>
      <div className="task-actions">
        <button className="btn-toggle" onClick={() => onToggle(task.id)}>
          {task.completed ? "Undo" : "Done"}
        </button>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button className="btn-delete" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
