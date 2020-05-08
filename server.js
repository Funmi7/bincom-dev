const express = require("express");

const agentRouter = require("./routes/users-routes");

const server = express();

server.use(express.json());

server.use("/users", agentRouter);

server.get("/", (req, res) => {
  res.status(200).json("API is working");
});

module.exports = server;
