import React from 'react';

function Task({ id, text, completed, deleteTask, toggleTaskCompletion }) {
  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
      <button onClick={() => toggleTaskCompletion(id)}>
        {completed ? 'Desmarcar' : 'Marcar como completada'}
      </button>
      <button onClick={() => deleteTask(id)}>Eliminar</button>
    </li>
  );
}

export default Task;