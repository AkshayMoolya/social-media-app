const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectDB = require("./db/connectDB");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const PORT = process.env.PORT || 5050;
connectDB();

app.use("/api/user", require("./routes/user.routes"));

app.use(errorHandler);
app.use(notFound);
app.listen(PORT, () => {
  console.log("Lisening on port " + PORT);
});
