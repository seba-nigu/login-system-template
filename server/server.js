const express = require("express");
const cors = require("cors");
const app = express();
const dbOperation = require("../database/dbOperation");
app.use(express.json());
app.use(cors());

const port = 5000;
app.listen(port, () => {
  console.log("Listening on port " + port);
});
