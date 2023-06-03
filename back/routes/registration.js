const express = require("express");
const router = express.Router();
const registrationCtrl = require("../controllers/registration");

router.post("/create", registrationCtrl.createRegistration);
router.get("/read", registrationCtrl.readRegistration);

module.exports = router;
