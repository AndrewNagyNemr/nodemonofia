const express = require("express");
const mongoose = require("mongoose");
const app = express();

const { logger, auth } = require("./middleware");
const { router: todoRouter } = require("./routes/todos");

// process.env.Env => !Production => logger

mongoose
  .connect("mongodb://localhost/firstDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.error(err);
  });

const port = process.env.PORT || 3000;

app.use(auth);
app.use(express.json());
if (process.env.ENV !== "Production") app.use(logger);
app.use(express.static("staic"));
app.use("/api/todos", todoRouter);

app.listen(port, () => console.log(`listening on port:${port}`));
