function TaskFilter({ onFilterChange }) {
    return (
      <div className="task-filter">
        <button onClick={() => onFilterChange("all")}>All</button>
        <button onClick={() => onFilterChange("pending")}>Pending</button>
        <button onClick={() => onFilterChange("completed")}>Completed</button>
      </div>
    );
  }
  
  export default TaskFilter;