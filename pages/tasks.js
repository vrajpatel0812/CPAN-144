import { useState } from 'react';
import Navbar from '../components/Navbar';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function Tasks() {
  const [tasks, setTasks] = useState([]); // Stores tasks

  // Add a new task
  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  // Toggle task completion
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // Delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", padding: "10px" }}>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}
