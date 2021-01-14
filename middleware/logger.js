const logger = (req, res, next) => {
  console.log("Method", req.method);
  console.log("ON", req.url);
  next();
};

module.exports = logger;
