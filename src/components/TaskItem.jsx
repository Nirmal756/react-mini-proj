function TaskItem({ task }) {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
    </li>
  );
}

export default TaskItem;
