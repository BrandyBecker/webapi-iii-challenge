function logger(req, res, next) {
    console.log(` | ${req.method} Request | ${req.url} | [${new Date().toISOString()}]`);
      next();
  };

  module.exports = logger;