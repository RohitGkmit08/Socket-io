import express from "express"
import http, { createServer } from "http"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
import { Server } from "socket.io"

const app = express();
const server = createServer(app);
// io = Socket.IO server object
const io = new Server(server);

const _dirname = dirname(fileURLToPath(import.meta.url));

// serving an html file -> means sending an html file from server to browser in response to a request.
app.get("/", (req, res) => {
    res.sendFile(join(_dirname, "index.html"))
})

// defining a connection event handler  - io.on("connection", callback) is a method used to register event listner for different events that occur on server side.
// io.on("connection", callback) -> whenever a new client is connected to Socket.io server, execute this callback.
// "connection" is an event name built into Socket.io. Socket.IO emits this event whenever a browser successfully establishes a connection.
io.on("connection", (socket) => {
    console.log("user connected to server");

    socket.on("disconnect", () => {
        console.log("User disconnected")
    })
})

const PORT= 3000
server.listen(PORT, ()=> {
    console.log("server is running on port :", PORT)
})
