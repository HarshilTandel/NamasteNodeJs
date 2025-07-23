# 🗄️ Creating a Server Databases - SQL & NoSQL

---

## ❓ What is a Database?

**Definition (via Wikipedia):**  
In computing, a **database** is an organized collection of data, typically managed by a **database management system (DBMS)** — software that enables interaction with users, applications, and the data itself. The combination of the database, the DBMS, and the associated tools is referred to as a **database system**. Sometimes, the term "database" loosely refers to the DBMS or the entire system.

---

## 🧩 Types of Databases

### 1. **Relational DB** – `MySQL`, `PostgreSQL`
Use structured tables and schemas. ACID-compliant. Great for complex queries and transactions.

### 2. **NoSQL DB** – `MongoDB`
Stores data in flexible, JSON-like documents. Highly scalable, perfect for semi/unstructured data.

### 3. **In-Memory DB** – `Redis`
Fast, in-memory data store. Great for caching, real-time analytics, and pub/sub systems.

### 4. **Distributed SQL DB** – `CockroachDB`
Horizontal scalability + ACID guarantees. Built for high availability and geo-distributed apps.

### 5. **Time Series DB** – `InfluxDB`
Optimized for time-stamped data (IoT, monitoring). Handles high write/query loads efficiently.

### 6. **Object-Oriented DB** – `db4o`
Stores data as objects. Fits naturally with OOP languages. Avoids relational mapping.

### 7. **Graph DB** – `Neo4j`
Manages relationships with nodes and edges. Ideal for social networks, recommendations, fraud detection.

### 8. **Hierarchical DB** – `IBM IMS`
Tree-structured, parent-child data model. Used in legacy systems with high throughput.

### 9. **Network DB** – `IDMS`
Graph-like data model with record types and set relationships. Offers performance and flexibility.

### 10. **Cloud DB** – `Amazon RDS`
Managed database service with support for MySQL, PostgreSQL, Oracle, and more. Automates scaling, backups, etc.

> ✅ **Most commonly used in web apps:**
> - **Relational DBs** (MySQL, PostgreSQL)  
> - **NoSQL DBs** (MongoDB)

---

## 🗃️ RDBMS (MySQL, PostgreSQL)

Relational Database Management Systems use structured schemas, rows, and columns.  
Great for apps with well-defined relationships and transactional consistency.

---

## 🧾 NoSQL & MongoDB

NoSQL is a broader category including databases that don’t use relational tables.

**Types of NoSQL databases:**
1. *Document* – e.g., MongoDB  
2. *Key-Value* – e.g., Redis  
3. *Graph* – e.g., Neo4j  
4. *Wide-Column* – e.g., Cassandra  
5. *Multi-Model* – e.g., ArangoDB

---

## ⚔️ SQL vs NoSQL


| Feature                     | RDBMS                                      | MongoDB (NoSQL)                                           |
|----------------------------|---------------------------------------------|-----------------------------------------------------------|
| **Type of Database**       | Relational                                  | Non-relational, document-based                            |
| **Data Storage**           | Tables (rows & columns)                     | JSON-like flexible documents (BSON)                       |
| **Schema**                 | Predefined, rigid                          | Dynamic, schema-less                                     |
| **Scalability**            | Vertical (add more CPU/RAM)                | Horizontal (add more servers)                            |
| **Transactions / ACID**    | Full ACID support                          | CAP theorem focus (Consistency, Availability, Partition) |
| **Joins**                  | Fully supports joins                       | Limited or no complex joins                              |
| **Data Format**            | Row-based                                  | Document-based                                            |
| **Performance**            | Stable but slower on huge datasets         | Fast on large-scale unstructured data                    |
| **Security**               | Strong, enterprise-grade                   | Secure but not as robust as RDBMS                        |
| **Query Language**         | SQL                                        | JSON-style queries, with some SQL-like syntax            |
| **Flexibility**            | Low flexibility for changing schema        | High flexibility, agile development                      |
| **Indexing**               | Limited indexing options                   | Extensive indexing on any field                          |
| **Complexity**             | Best for structured data                   | Great for evolving, semi/unstructured data               |
| **Backup/Recovery**        | Manual or external tools                   | Built-in backup and recovery                             |
| **Deployment**             | On-premises / Cloud                        | Cloud-native, supports multi-cloud                       |
| **Best Suited For**        | Complex relationships, normalized data     | Scalability, flexible data models                        |

---
