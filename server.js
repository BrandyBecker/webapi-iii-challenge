const express = require('express');
const logger = require('./middleware/logger.js');

const server = express();
const userRouter = require('./users/userRouter');

server.use(logger);
server.use(express.json());//built-in
server.use("/api/users",userRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

module.exports = server;
