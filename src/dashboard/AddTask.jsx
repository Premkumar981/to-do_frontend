import { useState } from "react";
import api from "../api/axios";
import "../styles/dashboard.css";

function AddTask({ onTaskAdded }) {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("URGENT");
  const [status, setStatus] = useState("NOT_STARTED");
  const [deadline, setDeadline] = useState(""); // ✅ THIS WAS MISSING / BROKEN

  const handleAddTask = async () => {
    if (!description.trim()) {
      alert("Task description is required");
      return;
    }

    try {
      await api.post("/tasks", {
        description,
        priority,
        status,
        deadline: deadline || null,
      });

      // reset form
      setDescription("");
      setPriority("URGENT");
      setStatus("NOT_STARTED");
      setDeadline("");

      onTaskAdded();
    } catch (err) {
      console.error(err);
      alert("Failed to add task");
    }
  };

  return (
    <div className="add-task-card">
      <h3>Add New Task</h3>

      <div className="add-task-row">
        <input
          type="text"
          placeholder="What do you need to do?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="URGENT">Urgent</option>
          <option value="NORMAL">Normal</option>
          <option value="DO_WHEN_TIME_ALLOWS">Do when time allows</option>
        </select>

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="NOT_STARTED">Not started</option>
          <option value="IN_PROGRESS">In progress</option>
          <option value="DONE">Done</option>
          <option value="MISSED_DEADLINE">Missed deadline</option>
        </select>

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)} // ✅ FIXED
        />

        <button className="add-btn" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
    </div>
  );
}

export default AddTask;
