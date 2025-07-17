# ⚙️ Episode-07: V8 Engine, libuv, and File Operations in Node.js

![GitHub stars](https://img.shields.io/github/stars/HarshilTandel/NamasteNodeJs?style=social)
![GitHub forks](https://img.shields.io/github/forks/HarshilTandel/NamasteNodeJs?style=social)
![License](https://img.shields.io/github/license/HarshilTandel/NamasteNodeJs)
![Node.js](https://img.shields.io/badge/node.js-18.x-brightgreen)
![Last Commit](https://img.shields.io/github/last-commit/HarshilTandel/NamasteNodeJs)

> Explore how Node.js uses the **V8 engine** to execute JavaScript and the **libuv library** to manage async I/O operations. Learn the right and wrong ways to use file system APIs like `fs.readFileSync` and `fs.readFile`.

---

## 🧠 Overview

Node.js is built on the powerful combination of the **V8 JavaScript engine** and the **libuv C library**.

- V8: Executes JavaScript synchronously.
- libuv: Handles asynchronous I/O tasks using event loop and thread pool.
- Together, they allow Node.js to manage both sync and async operations efficiently.

---

## ⚙️ Core Components

### 🔬 V8 Engine

- Runs JavaScript code (same engine used by Chrome).
- Executes one line at a time on a single thread.
- Manages synchronous operations like basic arithmetic, loops, etc.

---

### 🧵 libuv Library

- Manages:
  - Asynchronous file I/O
  - Timers (`setTimeout`)
  - Networking (`https.get`)
  - Crypto (`pbkdf2`)
- Uses thread pool and event loop to handle non-blocking tasks.

---

## ❌ Incorrect File Read (Sync Misuse)

```js
fs.readFileSync('./file.txt', 'utf-8', (err, data) => {
  console.log("Data:", data);
});
```

- ❌ `readFileSync` is a **synchronous** method.
- Does **not** accept a callback.
- Callback is ignored and `data` will be `undefined`.

---

## ✅ Correct File Read (Sync)

```js
try {
  const data = fs.readFileSync('./file.txt', 'utf-8');
  console.log("Data:", data);
} catch (err) {
  console.error("Error:", err);
}
```

- Blocks the event loop while reading.
- Use only when needed to block on purpose (e.g. script startup logic).

---

## 🔁 Synchronous Example

```js
console.log("Start");

function mulFn(x, y) {
  return x * y;
}

const result = mulFn(1078698, 20986);
console.log("Result:", result);
```

- Executes step-by-step, blocking the thread.
- Good for simple, small CPU-bound logic.

---

## ⚡ Asynchronous Examples (Handled by libuv)

### 🔐 crypto.pbkdf2

```js
crypto.pbkdf2("password", "salt", 5000, 50, "sha512", (err, key) => {
  console.log("Key:", key.toString('hex'));
});
```

### 🌐 https.get

```js
https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Data fetched!");
});
```

### ⏲️ setTimeout

```js
setTimeout(() => {
  console.log("Executed after 5 sec");
}, 5000);
```

### 📂 fs.readFile

```js
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  console.log("Async File:", data);
});
```

- These all run without blocking the main thread.
- libuv manages them using the event loop and background threads.

---

## 🧪 Event Loop Example

```js
console.log("Hello world");

setTimeout(() => {
  console.log("call me ASAP");
}, 0);

function mulFn(x, y) {
  return x * y;
}

const c = mulFn(1078698, 20986);
console.log("Multiplication result:", c);
```

- `setTimeout(..., 0)` still runs **after** all sync code.
- Demonstrates how async tasks get queued.

---

## 📌 Summary

| Concept             | Description                                                                  |
|---------------------|------------------------------------------------------------------------------|
| V8 Engine           | Executes JavaScript synchronously                                            |
| libuv               | Handles async I/O using event loop and thread pool                           |
| `fs.readFileSync`   | Synchronous and blocking, returns result immediately                         |
| `fs.readFile`       | Asynchronous, non-blocking, result via callback                              |
| Event Loop          | Schedules async tasks after current call stack clears                        |

---

> 📚 Inspired by [Akshay Saini](https://github.com/akshaymarch7)’s **Namaste Node.js** series — the best way to learn Node internals.

> 🌟 Found this helpful? Give the repo a ⭐️ and share with your dev friends!
