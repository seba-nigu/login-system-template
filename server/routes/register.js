const router = require("express").Router();
const bcrypt = require("bcrypt");
const dbOperation = require("../../database/dbOperation");

router.post("/", async (req, res) => {
  bcrypt.hash(req.body.password, 10, async function (err, hash) {
    await dbOperation.createRegister({
      email: req.body.email,
      username: req.body.username,
      password: hash,
    });
  });
  res.send("Register successfull");
});

module.exports = router;
