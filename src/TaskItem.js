import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <span className={task.completed ? 'completed' : ''}>{task.name}</span>
      <button onClick={onToggle}>
        {task.completed ? 'Marcar como no completada' : 'Marcar como completada'}
      </button>
      <button onClick={onDelete}>Eliminar</button>
    </li>
  );
}

export default TaskItem;
