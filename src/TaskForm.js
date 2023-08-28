import React, { useState } from 'react';

function TaskForm({ onAdd }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    onAdd(newTask);
    setNewTask('');
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar</button>
    </div>
  );
}

export default TaskForm;
