# Namaste Node.js

A hands-on guide to building and understanding HTTP servers in Node.js.

---

## 📚 Table of Contents

1. [What Is a “Server”?](#️-what-is-a-server)  
2. [Client–Server Architecture](#-clientserver-architecture)  
3. [HTTP vs WebSockets](#-http-vs-websockets)  
4. [Creating a Basic HTTP Server](#-creating-a-basic-http-server)  


---

## 🖥️ What Is a “Server”?

In Node.js, the term **server** can refer to:

- **Hardware**: A physical machine that provides resources and services over a network.  
- **Software**: A Node.js application that listens for client requests and sends back data.

When we say “deploy your app on a server,” we typically mean:

1. **Machine**  
   A physical or virtual computer (cloud/server) with CPU, RAM, storage, and internet access.

2. **Operating System**  
   Linux, Windows, macOS, etc., where Node.js runs.

3. **Server Software**  
   Node.js (or others like Nginx, Apache) running code that listens for incoming requests and sends responses.

---

## 🔗 Client–Server Architecture

- **Client**  
  A program (e.g., browser, Postman) that sends requests. Each client has its own IP address.

- **Server**  
  A process running on a machine, listening on a specific IP + port (e.g., `192.168.0.1:3000`).

- **Lifecycle of Request**  
  ```
  1. Client opens socket  
  2. Sends HTTP request  
  3. Server reads request  
  4. Sends response  
  5. Socket closes (unless using persistent connection like WebSockets)
  ```

---

## 🔁 HTTP vs WebSockets

| Protocol     | Connection Type         | Use Case                          |
|--------------|--------------------------|-----------------------------------|
| **HTTP**     | Short-lived (1 req/res)  | Web pages, APIs                   |
| **WebSocket**| Persistent, Bi-directional | Chat apps, live stock tickers, games |

---

## 🧪 Creating a Basic HTTP Server

```js
// server.js
const http = require("node:http");
const port = 999;

const server = http.createServer((req, res) => {
  res.end("Server created!");
});

server.listen(port, () => {
  console.log("Server running on port " + port);
});
```