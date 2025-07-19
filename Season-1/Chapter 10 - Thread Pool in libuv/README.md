# ⚙️ Thread Pool in libuv

Whenever there's an asynchronous task, V8 offloads it to libuv’s thread pool. For example, when reading a file, libuv uses one of the threads in its pool. The file system (`fs`) call is assigned to a thread, which makes the OS request. While that thread is busy, it can’t do other work. Once the operation completes, the thread frees up for the next job (e.g., a cryptographic hash via `crypto.pbkdf2`).

```bash
# Default thread pool size
UV_THREADPOOL_SIZE=4
```
## ❓ Q: Do HTTP API Requests Use the Thread Pool?
**A:** No. Networking I/O is handled by kernel-level watchers.

- **Sockets & File Descriptors**  
  Each incoming connection is tied to a socket descriptor.

- **Kernel Mechanisms**  
  - **Linux:** `epoll`  
  - **macOS/BSD:** `kqueue`  

The OS monitors thousands of descriptors and notifies libuv when data is ready—no per-connection thread needed.
## 🚫 Don’t Block the Main Thread
- **Avoid Sync Methods** (`fs.readFileSync`, etc.)  
- **Avoid Heavy JSON Processing**  
- **Avoid Complex Regex**  
- **Avoid CPU-bound Loops**  

---

## 🛠️ Data Structures
- **`epoll` / `kqueue`** → Red–Black Tree  
- **Timers** → Min-Heap  

---

## 🔠 Naming Matters
Choose clear, consistent names for threads, tasks, and callbacks.

---

## 💡 Implications
1. **Scalability:** Using `epoll`/`kqueue` allows Node.js servers to handle thousands of concurrent connections without spawning threads per connection.  
2. **Performance:** Keeping CPU-bound or blocking work off the main thread ensures the event loop remains responsive.  
3. **Best Practices:** Always prefer asynchronous APIs, monitor thread-pool usage for heavy tasks, and use clear naming to simplify debugging.  
4. **Extensibility:** You can adjust `UV_THREADPOOL_SIZE` to tune performance for CPU-intensive workloads (e.g., cryptographic operations).  
