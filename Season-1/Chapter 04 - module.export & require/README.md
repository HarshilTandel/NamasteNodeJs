# 🚀 Namaste Node.js - Episode 4 Summary  


![GitHub stars](https://img.shields.io/github/stars/HarshilTandel/NamasteNodeJs?style=social)
![GitHub forks](https://img.shields.io/github/forks/HarshilTandel/NamasteNodeJs?style=social)
![License](https://img.shields.io/github/license/HarshilTandel/NamasteNodeJs)
![Node.js](https://img.shields.io/badge/node.js-18.x-brightgreen)
![Last Commit](https://img.shields.io/github/last-commit/HarshilTandel/NamasteNodeJs)

> 📦 **Modules in Node.js — Reuse & Share Code Across Files**
---

## 🔄 Importing Modules Using `require()`

The `require()` function is used to include external modules.

```js
// app.js
const greet = require('./greet');

console.log(greet('Harshil')); // Output: Hello, Harshil!
```

---

## 📤 Exporting Multiple Items

You can attach multiple values (functions, variables, objects) to `module.exports`.

```js
// math.js
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

module.exports = {
  add,
  multiply
};
```

---

## 📥 Importing Multiple Named Exports

Use **object destructuring** to access individual exports:

```js
// app.js
const { add, multiply } = require('./math');

console.log(add(4, 6));      // Output: 10
console.log(multiply(4, 6)); // Output: 24
```

---

## 🧠 Behind the Scenes of `require()`

When a file is required:
- Node **executes** the module code.
- Only values returned via `module.exports` are shared.
- Local variables remain **private**.

```js
// config.js
const secret = "hidden_value";
const apiKey = "public_key";

module.exports = { apiKey };
```

```js
// main.js
const { apiKey } = require('./config');
console.log(apiKey);    // ✅ Works
console.log(secret);    // ❌ Error: secret is not defined
```

---

## 📁 Two Types of Modules in Node.js

| Type       | Extension | Syntax Used         | Notes                           |
|------------|-----------|---------------------|----------------------------------|
| CommonJS   | `.js` / `.cjs` | `require`, `module.exports` | Default in Node.js |
| ES Modules | `.mjs`         | `import`, `export`         | Modern JS module system         |

---

## ✍️ CommonJS Example (`.js` or `.cjs`)

```js
// logger.cjs
function log(msg) {
  console.log("[LOG]:", msg);
}
module.exports = log;
```

```js
// app.cjs
const log = require('./logger.cjs');
log("Hello from CJS");
```

---

## ✨ ES Module Example (`.mjs`)

```js
// utils.mjs
export const square = (x) => x * x;
```

```js
// app.mjs
import { square } from './utils.mjs';
console.log(square(5)); // Output: 25
```

---

## 🔄 Key Differences: CommonJS vs ES Modules

| Feature          | CommonJS (`.cjs`)      | ES Modules (`.mjs`)      |
|------------------|------------------------|---------------------------|
| Syntax           | `require`, `module.exports` | `import`, `export`      |
| Execution Style  | Synchronous            | Asynchronous              |
| File Extension   | `.js` / `.cjs`         | `.mjs`                    |
| Use Case         | Legacy, existing apps  | Modern apps, browser-friendly |

---

## ✅ Final Recap

- Use `require()` to bring in modules with `module.exports`.
- Export single or multiple values using `module.exports = {...}`.
- Prefer **CommonJS** for legacy or Node-only apps.
- Use **ES Modules** (`.mjs`) for modern, browser-compatible, or future-ready projects.

---

> 💡 **Tip:** Stick with CommonJS for now in Node.js tutorials unless you’re explicitly working with `.mjs` files or ESM-based tooling.

> 🌟 Don't forget to **star the repo** if you're learning something valuable!
