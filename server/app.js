const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connection = require("./src/db/connect");

const userRouter = require("./src/routers/user");
const bookRouter = require("./src/routers/book");

const app = express();
const port = process.env.PORT;

const json = express.json();
app.use(json);
app.use(cors());
app.use(morgan("dev"));

app.use("/users", userRouter);
app.use("/books", bookRouter);

// Error handling
app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      message: err.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
