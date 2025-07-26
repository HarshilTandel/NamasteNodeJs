# 📦 MongoDB Setup & CRUD Operations Guide

Welcome to the **MongoDB Setup and CRUD Operations** guide. This documentation will walk you through:

- ✅ Setting up MongoDB Atlas & Compass  
- ✅ Connecting via Node.js  
- ✅ Performing full CRUD operations  
- ✅ Troubleshooting connection issues  

---

## 🚀 1. MongoDB Atlas Setup

### 🔗 Step 1: Create an Account
- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Sign up or log in.

### ☁️ Step 2: Create a Free M0 Cluster
- Choose **M0 Sandbox**
- Select Cloud Provider + Region
- Click **Create Cluster**

### 👤 Step 3: Create Database User
- Go to **Database Access** → **Add New User**
- Provide username & password
- Assign **Read and write to any database**

### 🌐 Step 4: Configure Network Access
- Go to **Network Access** → **Add IP Address**
- Choose **Allow Access from Anywhere**

---

## 🔗 2. Get Your Connection String

1. Go to **Clusters** → Click **Connect**
2. Choose **Connect your application**
3. Copy connection string like:

```bash
mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
```
Replace `<your_actual_username>`, `<your_actual_password>`, and `<your_actual_dbname>` with your actual credentials.

## 🧭 3. Connect Using MongoDB Compass

- 🔽 Download MongoDB Compass
- 🔗 Paste your MongoDB connection string
- 🟢 Click Connect
- 📂 Explore your databases and collections

## 🛠️ 4. Local MongoDB Connection with Node.js

### 📦 Install MongoDB Driver

```bash
npm install mongodb
```

Replace `<your_actual_username>`, `<your_actual_password>`, and `<your_actual_dbname>` with your actual credentials.

## 🔁 5. MongoDB CRUD Operations

### 🟢 CREATE – insertMany()

```javascript
const data = {
  firstname: "Akshad",
  lastname: "Jaiswal",
  city: "Pune",
  phoneNumber: "88526587",
};

const insertData = await collection.insertMany([data]);
console.log("Data inserted:", insertData);
```

### 🔵 READ – `find()`

```js
const findData = await collection.find({}).toArray();
console.log("All Data:", findData);
```
---

### 🟡 UPDATE – `updateOne()`

```js
const { ObjectId } = require('mongodb');

const updateData = await collection.updateOne(
  { _id: new ObjectId("67066d6a3be8f41630d5dae4") },
  { $set: { firstname: "Mint" } }
);
console.log("Updated Document:", updateData);
```
---

### 🔴 DELETE – `deleteOne()`

```js
const { ObjectId } = require('mongodb');

const deletedata = await collection.deleteOne(
  { _id: new ObjectId("670668562c6bd11e25050c13") }
);
console.log("Deleted Data:", deletedata);

```

## 📋 CRUD Summary Table

| Operation | Method       | Description                              | Example Use Case                |
|-----------|--------------|------------------------------------------|---------------------------------|
| Create    | `insertMany` | Adds documents to a collection           | Add new user or product         |
| Read      | `find`       | Retrieves documents from the collection  | Fetch user details              |
| Update    | `updateOne`  | Modifies existing document fields        | Update user name or email       |
| Delete    | `deleteOne`  | Removes documents from the collection    | Delete inactive user accounts   |

---

## ❗ 6. Troubleshooting

- ✅ **Whitelist IP**: Ensure correct IP is added under **Network Access**
- ✅ **Credentials**: Verify `<username>` and `<password>` in your connection string
- ✅ **Compass Reset**: Go to **Settings → Reset Compass** if issues occur

---

## 🎉 Conclusion

You are now ready to:

- ✅ Set up and manage MongoDB Atlas  
- ✅ Connect to databases via Compass or Node.js  
- ✅ Perform full CRUD operations  
- ✅ Handle common connection issues  

Start building scalable backend applications with confidence using MongoDB! 🧠🚀

