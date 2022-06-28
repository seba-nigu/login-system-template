const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);

const port = 5000;
app.listen(port, () => {
  console.log("Listening on port " + port);
});
