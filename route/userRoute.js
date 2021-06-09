const userHandlers = require('../controllers/userController');
const express = require("express")
var router = express.Router();
const AuthMiddleware=require("../middleware/auth")

router.post("/profile",AuthMiddleware.VerifyToken, userHandlers.profile);
router.post("/register",  userHandlers.register);
router.post("/signin", userHandlers.sign_in);

module.exports = router