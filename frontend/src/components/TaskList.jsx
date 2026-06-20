import TaskItem from "./TaskItem.jsx";

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  if (tasks.length === 0) {
    return <p>No tasks</p>;
  }

  const doubledTasks = [...tasks, ...tasks];

  return (
    <div className="carousel">
      <div className="carousel-track">
        {doubledTasks.map((task, index) => (
          <TaskItem
            key={`${task.id}-${index}`}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
