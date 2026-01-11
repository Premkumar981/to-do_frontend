import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import AddTask from "./AddTask";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";
import "../styles/layout.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
  const [filterStatus, setFilterStatus] = useState("");


  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editDescription, setEditDescription] = useState("");
  const [editStatus, setEditStatus] = useState("");
  const [editPriority, setEditPriority] = useState("");
  const [editDeadline, setEditDeadline] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch {
      navigate("/login");
    }
  };

  const logout = async () => {
    await api.post("/auth/logout");
    navigate("/login");
  };
  

  const markAsDone = async (task) => {
    await api.put(`/tasks/${task.id}`, {
      description: task.description,
      priority: task.priority,
      status: "DONE",
      deadline: task.deadline,
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const startEdit = (task) => {
    setEditingTaskId(task.id);
    setEditDescription(task.description);
    setEditStatus(task.status);
    setEditPriority(task.priority || "NORMAL");
    setEditDeadline(task.deadline || "");
  };

  const saveEdit = async (id) => {
    await api.put(`/tasks/${id}`, {
      description: editDescription,
      priority: editPriority,
      status: editStatus,
      deadline: editDeadline || null,
    });
    setEditingTaskId(null);
    fetchTasks();
  };

  const processedTasks = tasks
    .filter((t) => (filterPriority ? t.priority === filterPriority : true))
    .filter((t) => (filterStatus ? t.status === filterStatus : true))
    .sort((a, b) => {
      if (!sortBy) return 0;
      if (sortBy === "deadline") {
        return new Date(a.deadline || 0) - new Date(b.deadline || 0);
      }
      return (a[sortBy] || "").localeCompare(b[sortBy] || "");
    });

  return (
    <div className="dashboard-layout">
      <Sidebar
        logout={logout}
        setFilterPriority={setFilterPriority}
        setFilterStatus={setFilterStatus}
        setSortBy={setSortBy}
      />

      <div className="main-content">
        <Navbar userName="Prem Kumar" />

        <AddTask onTaskAdded={fetchTasks} />

        <ul className="task-list">
          {processedTasks.map((t) => (
            <li key={t.id} className="task-card">
              {editingTaskId === t.id ? (
                /* 🔥 EDIT MODE CARD 🔥 */
                <div className="task-edit-card">
                  <input
                    className="edit-input"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    placeholder="Task description"
                  />

                  <select
                    className="edit-select"
                    value={editPriority}
                    onChange={(e) => setEditPriority(e.target.value)}
                  >
                    <option value="URGENT">Urgent</option>
                    <option value="NORMAL">Normal</option>
                    <option value="DO_WHEN_TIME_ALLOWS">Do when time allows</option>
                  </select>

                  <select
                    className="edit-select"
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value)}
                  >
                    <option value="NOT_STARTED">Not started</option>
                    <option value="IN_PROGRESS">In progress</option>
                    <option value="DONE">Done</option>
                    <option value="MISSED_DEADLINE">Missed deadline</option>
                  </select>

                  <input
                    className="edit-input"
                    type="date"
                    value={editDeadline}
                    onChange={(e) => setEditDeadline(e.target.value)}
                  />

                  <div className="edit-actions">
                    <button className="save-btn" onClick={() => saveEdit(t.id)}>
                      💾 Save
                    </button>
                    <button
                      className="cancel-btn"
                      onClick={() => setEditingTaskId(null)}
                    >
                      ✖ Cancel
                    </button>
                  </div>
                </div>
              ) : (
                /* 👀 VIEW MODE */
                <>
                  <div className="task-info">
                    <h4>{t.description}</h4>
                    <div className="task-meta">
                      <span className={`badge ${(t.priority || "normal").toLowerCase()}`}>
                        {t.priority || "N/A"}
                      </span>
                      <span className="status">{t.status}</span>
                      {t.deadline && <span className="date">{t.deadline}</span>}
                    </div>
                  </div>

                  <div className="task-actions">
                    {t.status !== "DONE" && (
                      <button className="done-btn" onClick={() => markAsDone(t)}>
                        ✓ Done
                      </button>
                    )}
                    <button className="edit-btn" onClick={() => startEdit(t)}>
                      Edit
                    </button>
                    <button className="delete-btn" onClick={() => deleteTask(t.id)}>
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
