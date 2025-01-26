const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin:"http://localhost:3000"
  },
});
io.on("connection", (socket) => {
  console.log(socket.id);
  // ...
});

server.listen(4000, ()=> {
    console.log("4000");
});