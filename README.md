# 🏢 Employee Management System (EMS) — Scalable MVP


> **"Logic meets Layout. Building robust systems that don't just store data—they manage workflows."**

Welcome to the **Employee Management System (EMS)**. This project is a specialized MERN stack application designed to centralize company operations through a sophisticated **Role-Based Access Control (RBAC)** architecture. 

Unlike a simple CRUD app, this system is built to demonstrate **true departmental scalability**, allowing a Super Admin to control the entire organization's flow while keeping sensitive data isolated with in departments.

---

## ✨ Key Features (Role-Based Flow)

The core of this system is the **Departmental Wall**. Data visibility is dynamically filtered based on the logged-in user's role:

* **👑 Super Admin Dashboard:** * Full access to all employees, departments, and financial data.
    * Ability to "promote" users to Department Admins (Tech, HR, Finance, etc.).
* **📂 Department Admins (Tech, Marketing, Editor):** * Isolated access to view and manage only their respective team members.
* **📑 HR Admin Module:** * Focused workflow for tracking daily attendance and managing leave approvals.
* **💰 Finance Admin Module:** * Restricted view of salary structures, payment statuses, and financial reporting.

---

## 🏗️ Technical Architecture

This project follows industry standards for cross-platform compatibility and clean code maintenance.

### Folder Structure
```text
attendance-management-system/
├── server/ (Backend)
│   ├── models/       # Database Schemas (Mongoose)
│   ├── controllers/  # Request Logic
│   ├── routes/       # Auth-guarded API Endpoints
│   └── middleware/   # Role-check logic (RBAC)
└── client/ (Frontend)
    ├── src/
    │   ├── components/ # PascalCase UI Elements
    │   ├── pages/      # View Components (Dashboards)
    │   └── utils/      # API Helper functions


#### 🛠️ The Tech Stack
Frontend: React.js (Component-based architecture)

Styling: Tailwind CSS (Rapid, responsive UI)

Backend: Node.js & Express.js (RESTful API)

Database: MongoDB (Scalable document storage)

Authentication: JWT (JSON Web Tokens) with Environment-based persistence.

##### 🚀 Getting Started
1. Prerequisites
Node.js installed

MongoDB Atlas or Local Instance

Postman (for API testing)
