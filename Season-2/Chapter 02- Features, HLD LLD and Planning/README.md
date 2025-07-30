# 💖 DevTinder

DevTinder is a developer-centric platform inspired by Tinder — where developers can **explore**, **connect**, and **collaborate** with like-minded tech enthusiasts. Whether you're looking for a co-founder, teammate, or open-source buddy, DevTinder brings devs together.

---

## 📌 Project Highlights

- 👤 **User Profiles**: Create & update dev-centric profiles.
- 🔍 **Developer Feed**: Swipe/explore other developer profiles.
- 💬 **Connection Requests**: Send, accept, reject requests.
- 🧠 **Mutual Matches**: View connections with mutual interest.
- 🛠️ **Tech Stack**: React.js + Node.js + MongoDB (MERN)

---

## 🧠 Project Development Cycle

### ✅ 1. Requirements Gathering

**Concept**:  
> A swipe-style collaboration platform for developers.

**Core Features**:
- Sign up / Log in
- Update and view dev profiles
- Send/accept/reject connection requests
- Manage your connection list

---

### 🏗️ 2. High-Level Design (HLD)

#### 🧱 Architecture
- Microservices approach with separate frontend and backend services.

#### 🧰 Tech Stack
| Layer      | Technology   |
|------------|--------------|
| Frontend   | React.js     |
| Backend    | Node.js + Express |
| Database   | MongoDB      |
| API Style  | RESTful APIs |

#### 👥 Team Roles
- SDE1 / SDE2
- Backend Engineers
- UI/UX Designers (optional)

---

### 🔧 3. Low-Level Design (LLD)

#### 📦 Database Schema

##### 🧑 User Collection

```json
{
  "_id": "ObjectId",
  "firstname": "string",
  "lastname": "string",
  "email": "string",
  "password": "hashed string",
  "age": "number",
  "gender": "string",
  "techStack": ["JavaScript", "React"],
  "bio": "string",
  "profilePic": "string (URL)",
  "createdAt": "timestamp"
}
```
## 🔗 ConnectionRequest Collection

```json
{
  "_id": "ObjectId",
  "fromUserId": "ObjectId",
  "toUserId": "ObjectId",
  "status": "pending | accepted | rejected",
  "createdAt": "timestamp"
}
```
## 🌐 REST API Design

### 📌 What is REST?

**REST (Representational State Transfer)** is an architectural style used to build scalable web services. It uses a stateless, client-server communication model and standard HTTP methods like:

- `GET` – Retrieve resources
- `POST` – Create new resources
- `PUT` – Replace resources entirely
- `PATCH` – Partially update resources
- `DELETE` – Remove resources

---

### 🔄 PUT vs PATCH

| Method | Purpose                          |
|--------|----------------------------------|
| PUT    | Replaces the **entire** resource |
| PATCH  | Updates **part** of the resource |

---

## 📡 API Endpoints

### 👥 User Management APIs

| Method | Endpoint      | Description              |
|--------|---------------|--------------------------|
| POST   | `/signup`     | Register a new user      |
| POST   | `/login`      | Authenticate and login   |
| POST   | `/profile`    | Create user profile      |
| GET    | `/profile`    | Retrieve profile details |
| PATCH  | `/profile`    | Update user profile      |
| DELETE | `/profile`    | Delete user profile      |

---

### 🔗 Connection Management APIs

| Method | Endpoint          | Description                             |
|--------|-------------------|-----------------------------------------|
| POST   | `/sendRequest`    | Send a connection request               |
| POST   | `/reviewRequest`  | Accept or reject a connection request   |
| GET    | `/request`        | View sent and received requests         |
| GET    | `/connections`    | View list of mutual connections         |
