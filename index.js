// code away!
const server = require('./server.js');

const port = 3030;
server.listen(port, () => {
  console.log(`\n===  ⭐  API on Port ${port} ⭐   ===\n`);
});

module.exports = port;