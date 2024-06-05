const dotenv = require("dotenv").config();
const express = require("express");
const Task = require("./models/user");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = 8000;
const db = require("./db");
app.use(express.json());

app.use(cors());

app.use(express.json({ limit: "10mb" }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);



const registerRouter = require("./routes/register.router");
const loginRouter = require("./routes/login.router");
/********************************************
API Endpoints
********************************************/
app.use("/api", registerRouter);
app.use("/api", loginRouter);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
