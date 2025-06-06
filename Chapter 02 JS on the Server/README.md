# 🚀 Namaste Node.js - Episode 2 Summary

> 📺 **Chapter 02: JavaScript on the Server**

![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen?style=for-the-badge&logo=node.js)  
![Powered By](https://img.shields.io/badge/Engine-V8-blue?style=flat-square&logo=googlechrome)  
![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)

---

## 📚 Table of Contents

- [🖥️ Servers in Node.js](#️-servers-in-nodejs)
- [⚙️ The V8 JavaScript Engine](#️-the-v8-javascript-engine)
- [🔁 Code Conversion in Node.js](#-nodejs-code-conversion-high-level-to-machine-code)
- [🌟 Support the Project](#-found-this-helpful)

---

## 🖥️ Servers in Node.js

> A **server** is a system that provides resources, data, services, or programs to clients over a network.

- In **Node.js**, servers handle **client requests** via the **HTTP protocol**.
- Built on an **event-driven, non-blocking I/O architecture**, enabling:

✅ Multiple requests handled **simultaneously**  
✅ No need for **thread-per-request** model  
✅ **Lower resource usage** and **high performance**

---

## ⚙️ The V8 JavaScript Engine

> V8 is the **open-source JavaScript engine** from Google, used in **Chrome** and **Node.js**.

<details>
<summary><strong>🚀 Key Features</strong></summary>

- **Just-In-Time (JIT) Compilation**: Converts JS to optimized machine code at runtime.
- **Garbage Collection**: Automatically manages memory.
- **Code Optimization**: Frequently used code paths are continuously optimized.

</details>

---

## 🔁 Node.js Code Conversion: High-Level to Machine Code

JavaScript is a **high-level interpreted language**. It needs to be transformed into **machine code** to run on hardware.

<details>
<summary><strong>🛠️ V8 Compilation Process</strong></summary>

### 1️⃣ Parsing
- Checks code for **syntax errors**
- Creates an **Abstract Syntax Tree (AST)**

### 2️⃣ IR (Intermediate Representation)
- AST is converted into **IR** (platform-independent)

### 3️⃣ JIT Compilation
- IR is compiled into **machine code**
- Code is optimized **at runtime** for performance

</details>

💡 This makes **Node.js** fast, flexible, and scalable for building real-time, high-concurrency apps.

---

## 🌟 Found this helpful?

> 📌 **Star** the repository to support the series!  
> 🤝 Share it with friends and fellow developers!  
> 💬 PRs and feedback are always welcome!

---

> © 2025 [Namaste Node.js Series](https://github.com/HarshilTandel/NamasteNodeJs.git)
