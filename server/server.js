const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();
const dbOperation = require("../database/dbOperation");
app.use(express.json());
app.use(cors());

app.post("/api/register", (req, res) => {
  bcrypt.hash(req.body.password, 10, async function (err, hash) {
    await dbOperation.createRegister({
      email: req.body.email,
      username: req.body.username,
      password: hash,
    });
  });
  res.send("Register successfull");
});

app.post("/api/login", async (req, res) => {
  // check in dbOperation if user and password match
  let data = await dbOperation.getLogin(req.body.email);
  bcrypt.compare(
    req.body.password,
    data.recordset[0].password,
    function (err, resp) {
      if (err) {
        console.log(err);
      }
      if (resp) {
        // Send JWT next
        console.log("Match");
      } else {
        console.log("No match");
        res.status(400).json("Email or Password incorrect!");
      }
    }
  );
});

const port = 5000;
app.listen(port, () => {
  console.log("Listening on port " + port);
});
