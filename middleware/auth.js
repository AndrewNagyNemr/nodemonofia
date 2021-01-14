const authenticate = (req, res, next) => {
  const { username, password } = req.headers;
  if (username === "admin" && password === "admin") next();
  else res.status(401).send("invalid username or password");
};

module.exports = authenticate;
