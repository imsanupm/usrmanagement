# 🧑‍💼 User Management System

A **beginner-friendly User Management System** built with **Node.js**, **Express**, **MongoDB**, and **EJS**, following the **MVC architecture**.  
This project was created as part of my learning journey when I started exploring **backend web development**, aiming to understand **CRUD operations**, **authentication**, and application structure.

---

## 📌 Key Features

- ✅ User Signup & Login  
- 🔐 Admin Login  
- ➕ Create New Users  
- 📝 Edit Existing Users  
- 🚫 Block / Unblock Users  
- ❌ Delete Users  
- 📋 View All Users (Admin Dashboard)  
- 💻 Session-Based Authentication  
- 🧱 Follows MVC Architecture  

---

## 🧠 Project Objectives

This project demonstrates:

- Setting up a Node.js + Express server  
- Using MongoDB and Mongoose for database interaction  
- Structuring a web application using the **MVC pattern**  
- Implementing session-based user authentication  
- Performing full CRUD operations (Create, Read, Update, Delete)  
- Using EJS for rendering dynamic views  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB + Mongoose  
- **Templating Engine:** EJS  
- **Authentication:** express-session  
- **Architecture:** MVC (Model-View-Controller)

---


## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/imsanupm/usrmanagement.git
cd usrmanagement
2. Install Dependencies
bash
Copy
Edit
npm install
3. Configure MongoDB
Ensure MongoDB is running locally at:

arduino
Copy
Edit
mongodb://127.0.0.1:27017/usrmanagement
Or use your MongoDB Atlas connection string if hosted in the cloud.

4. Start the Application
bash
Copy
Edit
npm start
Then open: http://localhost:3000

🔐 Admin Access
You can manually insert an admin user in MongoDB or implement a default seed script to create one on first launch.

✨ CRUD Functionality Overview
Operation	Description
Create	Add new users (admin only)
Read	View list of all users
Update	Edit user details
Delete	Remove users from the system
Block/Unblock	Restrict or allow user access

🎓 Purpose
This project was built to strengthen my understanding of Node.js, MongoDB, and how the MVC pattern works in real-world applications.
It’s also helpful for beginners looking to practice user management and CRUD operations.

