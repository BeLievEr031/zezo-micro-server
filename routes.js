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

// @############FTP Routes##################@
router.post("/ftp/add", websiteController.createFTP);
router.delete("/ftp/delete", websiteController.deleteFTP);
router.get("/ftp/fetch", websiteController.fetchFTP);

// @############Email Routes##################@
router.post("/email/add", websiteController.createEmail);
router.delete("/email/delete", websiteController.deleteEmail);
router.get("/email/fetch", websiteController.fetchEmail);

// @############DNS Routes##################@
router.post("/dns/add", websiteController.createDNS);
router.get("/dns/fetch", websiteController.fetchDNS);
router.delete("/dns/delete", websiteController.deleteDNS);

// @############SSH Routes##################@
router.post("/website/ssh", websiteController.loginToSsh);

module.exports = router;
