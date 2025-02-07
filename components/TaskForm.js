import { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask(""); // Clear input
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", padding: "10px" }}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "5px", width: "200px" }}
      />
      <button type="submit" style={{ marginLeft: "10px", padding: "5px" }}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
