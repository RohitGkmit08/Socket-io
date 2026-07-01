# Socket.io Demo

A beginner-friendly Node.js application demonstrating bi-directional, real-time, event-based communication between a client (browser) and a server using **Express** and **Socket.io**.

---

## Features
- **Express Server**: Serves a static client-side webpage (`index.html`) at the root (`/`) path.
- **Bi-directional WebSocket Communication**: Establishes a connection between the client and server using Socket.io.
- **Event Listeners & Emitters**:
  - Automatically logs when a user connects and disconnects on both client and server sides.
  - **Server-to-Client**: Server emits a `message` event containing `"hello from server"`, which the client logs in the browser console.
  - **Client-to-Server**: Client emits a `newMessage` event containing `"sending message from client side"`, which the server logs in the terminal.

---

## Project Structure
```text
├── index.js          # Express server with Socket.io configuration
├── index.html        # Client-side HTML page with socket.io-client integration
├── package.json      # Dependencies and startup scripts
├── package-lock.json # Locked versions of dependencies
└── .gitignore        # Excludes node_modules from Git tracking
```

---

## Installation & Setup

Follow these steps to run the project locally:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Clone the Repository
```bash
git clone https://github.com/RohitGkmit08/Socket-io.git
cd Socket-io
```

### 3. Install Dependencies
Install Express, Socket.io, and Nodemon:
```bash
npm install
```

### 4. Start the Server
Run the project using Nodemon (which automatically restarts the server on code changes):
```bash
npm start
```
*The server will start running on port `3000` (i.e. `http://localhost:3000`).*

---

## How It Works

1. When you navigate to `http://localhost:3000` in the browser, the server sends `index.html` in response.
2. The browser parses `index.html` and hits the `/socket.io/socket.io.js` script tag.
3. Socket.io automatically intercepts this path and serves the client library.
4. Calling `io()` establishes a connection.
5. In the backend console, you will see:
   ```text
   user connected to server
   sending message from client side
   ```
6. In the browser developer tools console, you will see:
   ```text
   connected to client/frontend
   hello from server
   ```
