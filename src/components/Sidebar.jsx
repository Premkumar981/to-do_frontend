import "../styles/dashboard.css";

function Sidebar({ logout, setFilterPriority, setFilterStatus, setSortBy }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Filters</h2>

      <div className="filter-group">
        <label>Priority</label>
        <select onChange={(e) => setFilterPriority(e.target.value)}>
          <option value="">All</option>
          <option value="URGENT">Urgent</option>
          <option value="NORMAL">Normal</option>
          <option value="DO_WHEN_TIME_ALLOWS">Do when time allows</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Status</label>
        <select onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">All</option>
          <option value="NOT_STARTED">Not started</option>
          <option value="IN_PROGRESS">In progress</option>
          <option value="DONE">Done</option>
          <option value="MISSED_DEADLINE">Missed deadline</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Sort By</label>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="">None</option>
          <option value="priority">Priority</option>
          <option value="status">Status</option>
          <option value="deadline">Deadline</option>
        </select>
      </div>

      {/* ✅ FIXED LOGOUT */}
      <button
        className="logout-btn"
        onClick={() => {
          console.log("Logout clicked");
          logout();
        }}
      >
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;
