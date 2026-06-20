function TaskSort({ sortBy, onSortChange }) {
  return (
    <select
      className="task-sort"
      value={sortBy}
      onChange={(e) => onSortChange(e.target.value)}
    >
      <option value="date">Sort by date</option>
      <option value="priority">Sort by priority</option>
      <option value="title">Sort by title</option>
    </select>
  );
}

export default TaskSort;
