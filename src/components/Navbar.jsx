import "../styles/dashboard.css";

function Navbar({ userName }) {
  return (
    <div className="navbar">
      <h1>To-Do List</h1>
      <div className="navbar-user">
        Welcome back, <strong>{userName || "User"}</strong> 👋
      </div>
    </div>
  );
}

export default Navbar;
