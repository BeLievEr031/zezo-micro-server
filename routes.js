const express = require("express");
const serviceController = require("./controller/service-controller");
const router = express.Router();

router.post("/service", serviceController.addService);

module.exports = router;
