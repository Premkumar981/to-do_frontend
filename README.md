# 🧩 To-Do List Application – Frontend (React)

## 📌 Project Overview
This repository contains the **frontend implementation** of a **full-stack To-Do List application** developed as part of **HCL Training / Evaluation**.  
The frontend is built using **React.js** and focuses on **clean UI, smooth user experience, and real-world application behavior**.

The application interacts with a **Spring Boot backend** through REST APIs to handle authentication and task management.

---

## 🎯 Purpose (For HCL Evaluation Panel)
This project demonstrates:
- Practical **React.js skills**
- Understanding of **component-based architecture**
- Handling **authentication-based flows**
- Real-time UI updates using **API integration**
- Professional UI/UX practices expected in enterprise applications

---

## 🖥️ Features Implemented

### 🔐 Authentication UI
- User **Login & Registration**
- Google OAuth Login (UI integration)
- Secure session-based navigation
- Automatic redirect on logout

### ✅ Task Management UI
- Add new tasks with:
  - Description
  - Priority (Urgent / Normal / Do when time allows)
  - Status (Not Started / In Progress / Done / Missed Deadline)
  - Deadline
- Edit existing tasks
- Delete tasks
- Mark tasks as **Done**
- Real-time UI refresh after every action

### 🔍 Filters & Sorting
- Filter tasks by:
  - Priority
  - Status
- Sort tasks by:
  - Priority
  - Status
  - Deadline

### 🎨 UI / UX Enhancements
- Sidebar-based professional layout
- Clean task cards with badges
- Color-coded priorities and statuses
- Responsive and user-friendly design
- Clear visual separation of actions (Edit / Done / Delete)

---

## 🧰 Tech Stack (Frontend)

| Technology | Purpose |
|----------|--------|
| **React.js** | UI Development |
| **JavaScript (ES6+)** | Logic |
| **Axios** | API Communication |
| **React Router** | Navigation |
| **CSS3** | Styling & Layout |
| **Google OAuth** | Login UI |

---

## 📂 Project Structure

```bash
src/
├── api/ # Axios configuration
├── auth/ # Login & Register pages
├── components/ # Navbar, Sidebar
├── dashboard/ # Dashboard & Task components
├── styles/ # CSS files
├── App.js
└── index.js
```

---

## 🔗 Backend Integration
This frontend communicates with a **Spring Boot backend** using REST APIs for:
- Authentication
- Task CRUD operations
- Session management

👉 **Backend Repository:**  
(https://github.com/Premkumar981/To-do_backend)

---

## 🚀 How to Run Frontend Locally

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Steps
```bash
git clone https://github.com/Premkumar981/to-do_frontend.git
cd to-do-frontend
npm install
npm start
```

Frontend will start at:
```bash
http://localhost:3000
```

## 🧠 Key Learning Outcomes

- End-to-end frontend development with React
- API-driven UI design
- Handling authentication-based routing
- Building production-style dashboards
- Writing clean, maintainable UI code

## 👨‍💻 Developed By

Prem Kumar<br>
HCL Training – Full Stack Java<br>
(To-Do List Assignment Project)<br>

## 🔮 Future Enhancements

- UI animations and transitions
- Dark mode support
- Task search
