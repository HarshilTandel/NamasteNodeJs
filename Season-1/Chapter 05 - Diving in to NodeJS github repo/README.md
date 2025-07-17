# 🧠 Episode-05: Diving into the Node.js Core Concepts


![GitHub stars](https://img.shields.io/github/stars/HarshilTandel/NamasteNodeJs?style=social)
![GitHub forks](https://img.shields.io/github/forks/HarshilTandel/NamasteNodeJs?style=social)
![License](https://img.shields.io/github/license/HarshilTandel/NamasteNodeJs)
![Node.js](https://img.shields.io/badge/node.js-18.x-brightgreen)
![Last Commit](https://img.shields.io/github/last-commit/HarshilTandel/NamasteNodeJs)


> Explore the *hidden mechanics* of Node.js – from **IIFE** to **module encapsulation**, and the internals of the legendary `require()` function.

---

## 🔄 Immediately Invoked Function Expression (IIFE)

IIFE is a **function that executes immediately** after it’s defined. It creates a new scope, perfect for keeping variables private.

### ✨ Basic Syntax

```js
(function() {
    // Private logic here
})();
```

### 💬 With Parameters

```js
(function(name) {
    console.log(`Hello, ${name}!`);
})('Node'); // Output: Hello, Node!
```

### 📌 Why Use IIFE in Node.js?

- ✅ Encapsulates logic  
- ✅ Avoids global namespace pollution  
- ✅ Simulates private variables & methods

### 🧪 Real-world Usage

```js
// myModule.js
const myModule = (function() {
    const secret = 'Hidden Logic';

    function whisper() {
        console.log('Shhh... it\'s private!');
    }

    return {
        shout: function() {
            console.log('I am public!');
            whisper();
        }
    };
})();

module.exports = myModule;
```

---

## 🔐 Module Privacy in Node.js

Every `.js` file in Node is a **self-contained module**. Anything not exported is automatically private.

```js
// privateModule.js
const hidden = 'Invisible outside';

function internalUseOnly() {
    console.log('Not for export');
}

module.exports = {
    show: function() {
        console.log('Visible to the outside world!');
    }
};
```

> ⚠️ `hidden` and `internalUseOnly()` are **not accessible** outside this file.

---

## 📦 Behind the Scenes: `require()` Unboxed

Ever wonder how `require()` actually works? Here’s a simplified step-by-step:

---

🧭 **Step 1: Resolve**

- Finds the absolute path of the module.
- Checks for core, file, or `node_modules`.

---

📂 **Step 2: Load**

- Reads the file content as a string.
- Supports `.js`, `.json`, `.node` extensions.

---

🛡 **Step 3: Wrap**

- Wraps your code in a function like:

```js
(function (exports, require, module, __filename, __dirname) {
    // Your module code
});
```

---

🛠 **Step 4: Compile**

- Parses and compiles JS code for execution.

---

⚙️ **Step 5: Execute**

- Runs the wrapped function and fills `module.exports`.

---

### 🧩 Final Usage

```js
const mod = require('./privateModule');
mod.show(); // Works fine
mod.internalUseOnly(); // ❌ Error: Not a function
```

---

## ✅ Summary

| Concept      | Purpose                                   |
|--------------|-------------------------------------------|
| IIFE         | Private scope & immediate execution       |
| Module Scope | Keep variables/functions isolated         |
| `require()`  | Loads and executes modules in 5 steps     |

---

> 💖 **Found this helpful?** Star ⭐ the repo and share it with your fellow devs!
