const TaskList = ({ tasks, toggleTask, deleteTask }) => {
    return (
      <div style={{ textAlign: "center", padding: "10px" }}>
        {tasks.length === 0 ? ( // Conditional Rendering
          <p>No tasks available.</p>
        ) : (
          <ul style={{ padding: "0" }}>
            {tasks.map((task, index) => (
              <li key={index} style={{ margin: "5px 0" }}>
                <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                  {task.text}
                </span>
                <button onClick={() => toggleTask(index)} style={{ marginLeft: "10px" }}>
                  ✔ Complete
                </button>
                <button onClick={() => deleteTask(index)} style={{ marginLeft: "5px" }}>
                  🗑 Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default TaskList;
  