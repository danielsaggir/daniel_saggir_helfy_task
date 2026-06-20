import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onDelete }) {
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
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;