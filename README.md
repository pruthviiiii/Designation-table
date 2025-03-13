# 📌 Designation Management API

A simple REST API built with **Node.js**, **Express**, and **MongoDB (Mongoose)** to manage company designations. It includes CRUD operations, sorting functionality, error handling, and is ready for future role-based access control (RBAC).

---

## 🚀 Features

✅ Create, Read, Update, Delete (CRUD) operations  
✅ MongoDB integration using Mongoose  
✅ Sorting on GET all designations  
✅ Error handling and input validation  
✅ Clean, modular code structure  
✅ Ready for Authentication and RBAC (handled by another team member)

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose)  
- **Version Control**: Git & GitHub  
- **Environment**: Local development (MongoDB Compass or MongoDB Atlas)

---

## 📂 Project Structure

```
project-root/
├── models/
│   └── Designation.js          # Mongoose schema for designations
├── routes/
│   └── designationRoutes.js    # CRUD and sorting logic
├── server.js                   # Entry point of the server
└── README.md                   # Project documentation
```

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js installed (v18 or higher recommended)
- MongoDB installed locally, or use MongoDB Atlas for cloud database

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-link>
   cd designation-management-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables (Optional)**
   Create a `.env` file in the root directory for environment configuration:
   ```
   MONGODB_URI=mongodb://localhost:27017/designations
   PORT=5000
   ```

4. **Start the server**
   ```bash
   npm start
   ```

---

## 📚 API Endpoints

### ➕ Create a Designation
**POST** `/api/designations`  
**Body (JSON):**
```json
{
  "company_id": "65fa3ec6abc12345abcdef12",
  "title": "Lead Developer",
  "description": "Leads advanced development projects"
}
```
**Response**
```json
{
  "_id": "67d121b65e6a59c71eb13258",
  "company_id": "65fa3ec6abc12345abcdef12",
  "title": "Lead Developer",
  "description": "Leads advanced development projects",
  "createdAt": "2025-03-12T05:55:02.076Z",
  "updatedAt": "2025-03-12T06:05:04.969Z"
}
```

---

### 📃 Get All Designations  
**GET** `/api/designations`  
Optional Query Parameters:
- `sortBy` (default: `createdAt`)
- `order` (`asc` or `desc`)

**Example:**  
`/api/designations?sortBy=title&order=asc`

---

### 🔎 Get a Single Designation by ID  
**GET** `/api/designations/:id`

---

### ✏️ Update a Designation  
**PUT** `/api/designations/:id`  
**Body (JSON):**
```json
{
  "title": "Updated Title",
  "description": "Updated Description"
}
```

---

### ❌ Delete a Designation  
**DELETE** `/api/designations/:id`

---

## 🔐 Authentication & RBAC (Planned)
- Authentication is being handled by another teammate.
- This project is structured to easily plug in **Role-Based Access Control (RBAC)** and authentication middlewares.

---

## 💡 Possible Enhancements (Future Scope)
- ✅ Pagination & Search filters  
- ✅ Role-based access control (RBAC)  
- ✅ Centralized error handling  
- ✅ Request validation with Joi or express-validator  
- ✅ Logging and monitoring (Winston, Morgan)  
- ✅ Deployment on cloud platforms (Render, Vercel, etc.)

---

## 🧑‍💻 Author

| Name        | Role                   |
|-------------|------------------------|
| Pruthviraj  | Intern                 |




### ✅ Project Status
Project **working as expected**. Currently integrated with MongoDB and supports CRUD operations, sorting, and basic error handling.


### 🔗 Links
- GitHub Repo:  https://github.com/pruthviiiii/Designation-table
- MongoDB Atlas:  MONGO_URI=mongodb+srv://Designation11:Hutech@cluster0.pl2iq.mongodb.net/designation_db?retryWrites=true&w=majority