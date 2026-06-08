import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onAddTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    onAddTask(input);
    setInput('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="新しいタスクを入力..."
        value={input}
        onChange={handleChange}
      />
      <button type="submit" className="task-add-btn">
        追加
      </button>
    </form>
  );
}

export default TaskForm;
