import React, { useState, useEffect } from 'react';
import './TaskBoard.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function TaskBoard() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // ローカルストレージに保存
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="task-board">
      <div className="task-board-container">
        <TaskForm onAddTask={addTask} />

        <div className="task-stats">
          <p>
            進捗: <span className="stat-number">{completedCount}</span> / <span className="stat-number">{totalCount}</span>
          </p>
        </div>

        {tasks.length === 0 ? (
          <div className="empty-state">
            <p>📝 タスクを追加してみましょう！</p>
          </div>
        ) : (
          <TaskList
            tasks={tasks}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
          />
        )}
      </div>
    </div>
  );
}

export default TaskBoard;
