// code away!
const server = require('./server.js');

const port = process.env.PORT || 3030;
server.listen(port, () => {
  console.log(`\n===  ⭐  API on Port ${port} ⭐   ===\n`);
});

module.exports = port;