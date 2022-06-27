const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/login", loginRoutes);
app.use("/api/register", registerRoutes);

const port = 5000;
app.listen(port, () => {
  console.log("Listening on port " + port);
});
