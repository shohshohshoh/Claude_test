import React from 'react';
import './TaskItem.css';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-item-content">
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={onToggle}
          aria-label="タスク完了チェックボックス"
        />
        <span className="task-text">{task.text}</span>
      </div>
      <button
        className="task-delete-btn"
        onClick={onDelete}
        aria-label="タスク削除ボタン"
      >
        🗑️
      </button>
    </div>
  );
}

export default TaskItem;
