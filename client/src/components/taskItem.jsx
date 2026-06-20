function TaskItem({ task }) {
    return (
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{task.completed ? "Done" : "Active"}</p>
        <p>{task.priority}</p>
      </div>
    );
  }
  
  export default TaskItem;