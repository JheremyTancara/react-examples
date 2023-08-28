import React, { useState, useEffect } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const predefinedTasks = [
      { name: 'Tarea 1', completed: false },
      { name: 'Tarea 2', completed: false },
      { name: 'Tarea 3', completed: false },
    ];
    setTasks(predefinedTasks);
  }, []);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { name: newTask, completed: false }]);
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <AppHeader />
      <TaskForm onAdd={handleAddTask} />
      <h2>Tareas Pendientes</h2> {/* Aplica el estilo al título */}
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="task"
            style={{
              backgroundColor: '#fff',
              margin: '10px',
              padding: '10px',
              border: '2px solid #000',
              borderRadius: '10px'
            }}
          >
            <span className={task.completed ? 'completed' : ''}>{task.name}</span>
            <button
              className={`button ${task.completed ? 'completed' : ''}`}
              onClick={() => handleToggleTask(index)}
            >
              {task.completed ? 'Marcar como no completada' : 'Marcar como completada'}
            </button>
            <button
              className="button"
              onClick={() => handleDeleteTask(index)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
