const bcrypt = require("bcrypt");
const dbOperation = require("../../database/dbOperation");

const registerUser = async (req, res) => {
  bcrypt.hash(req.body.password, 10, async function (err, hash) {
    await dbOperation.createRegister({
      email: req.body.email,
      username: req.body.username,
      password: hash,
    });
  });
  res.status(200).json({ message: "Registered successfully" });
};

const loginUser = async (req, res) => {
  let data = await dbOperation.getLogin(req.body.email);
  bcrypt.compare(
    req.body.password,
    data.recordset[0].password,
    function (err, resp) {
      if (err) {
        console.log(err);
      }
      if (resp) {
        4;
        // Send JWT next
        console.log("Match");
      } else {
        console.log("No match");
        res.status(400).json({ message: "Email or Password incorrect!" });
      }
    }
  );
};

const getUserData = async (req, res) => {
  res.json({ message: "User data displayed" });
};

module.exports = {
  registerUser,
  loginUser,
  getUserData,
};
