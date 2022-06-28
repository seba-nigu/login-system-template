const router = require("express").Router();
const {
  loginUser,
  registerUser,
  getUserData,
} = require("../controllers/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getUserData);

module.exports = router;
