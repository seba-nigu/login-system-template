const router = require("express").Router();
const bcrypt = require("bcrypt");
const dbOperation = require("../../database/dbOperation");

router.post("/", async (req, res) => {
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

module.exports = router;
