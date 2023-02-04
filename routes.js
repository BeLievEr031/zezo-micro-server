const express = require("express");
const serviceController = require("./controller/service-controller");
const websiteController = require("./controller/website-controller");
const router = express.Router();

router.post("/service", serviceController.addService);

// @############Website Routes##################@
router.post("/website/add", websiteController.createWebsite);
router.get("/website/fetch", websiteController.fetchWebsite);
router.delete("/website/delete", websiteController.deleteWebsite);
router.put("/website/php", websiteController.changePhpVersion);

// @############Package Routes##################@
router.post("/package/add", websiteController.createPackage);
router.delete("/package/delete", websiteController.deletePackage);
router.get("/package/fetch", websiteController.fetchPackage);
router.put("/package/modify", websiteController.modifyPackage);

router.post("/website/ssh", websiteController.loginToSsh);

module.exports = router;
