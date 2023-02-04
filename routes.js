const express = require("express");
const serviceController = require("./controller/service-controller");
const websiteController = require("./controller/website-controller")
const router = express.Router();

router.post("/service", serviceController.addService);
router.post("/website/add", websiteController.createWebsite);
// router.delete("/wesite/delete", serviceController.addService);

module.exports = router;
