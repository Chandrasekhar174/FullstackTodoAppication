# FullstackTodoAppication
# Full Stack TODO App with User Authentication

A full-stack TODO application with user registration and login system using:

- **Frontend:** React, HTML, CSS
- **Backend:** Node.js, Express.js, MySQL
- **Authentication:** JWT (expires in 1 h)

---

## Features

- User Signup and Login with JWT Authentication
- Create, Read, Delete TODOs
- Authenticated routes (Only logged-in users can manage their TODOs)
- JWT auto-expiry (1 h)
- Protected backend with `auth` middleware
- Responsive and clean UI

---

##  Project Structure

Fullstack-Todo-project/
├── backend/
│ ├── routes/
│ │ └── auth.js
│ │ └── todos.js
│ ├── db.js
│ └── index.js
├── frontend/
│ ├── src/
│ │ └── App.jsx
│ │ └── components/
│ ├── index.html
│ └── index.js
└── README.md


# Database Schema
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  userpassword VARCHAR(255)
);

CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  completed BOOLEAN DEFAULT false,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

