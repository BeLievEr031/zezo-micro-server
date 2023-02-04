let axios = require("axios");
const https = require('https');

class WebsiteController {
  async createWebsite(req, res, next) {
    try {
      console.log("hiughiadhgidhgpfihgifu")
      return res.json({
        success: true,
      })
      const { domain } = req.body;
      console.log("🚀 ~ file: website-controller.js:6 ~ WebsiteController ~ createWebsite ~ req.body", req.body)
      if (!req.body.domain || req.body.domain === "" || req.body.domain === undefined) {
        return res.status(400).json({
          success: false,
          error: "Domain name is required",
        });
      }

      let data = {
        serverUserName: "admin",
        controller: "submitWebsiteCreation",
        domainName: domain,
        package: "Default",
        adminEmail: "sandy@gmail.com",
        phpSelection: "PHP 7.4",
        websiteOwner: "admin",
        ssl: 0,
        dkimCheck: 0,
        openBasedir: 0,
      };

      let res = await axios({
        url: "https://okabadiwala.com:8090/cloudAPI/",
        method: "post",
        data: {
          serverUserName: "admin",
          controller: "submitWebsiteCreation",
          domainName: "hellosijzhjkdfkdhkhjfdjhfsjd.in",
          package: "Default",
          adminEmail: "sandy@cyberpersons.com",
          phpSelection: "PHP 7.4",
          websiteOwner: "admin",
          ssl: 0,
          dkimCheck: 0,
          openBasedir: 0,
        },
        headers: req.headers,
      });

      console.log(res.data);
      res.json({
        success: true,
        data: res.data,
      });
    } catch (error) {
      return res.json({
        success: false,
        error,
      });
    }
  }
  async test(req, res, next) {

    try {
      if (!req.body.domain || req.body.domain === "" || req.body.domain === undefined) {
        return res.status(400).json({
          success: false,
          error: "Domain name is required",
        });
      }

      const data = {
        "serverUserName": "admin",
        "controller": "submitWebsiteCreation",
        "domainName": req.body.domain,
        "package": "Default",
        "adminEmail": "usman@cyberpersons.com",
        "phpSelection": "PHP 7.4",
        "websiteOwner": "admin",
        "ssl": 0,
        "dkimCheck": 0,
        "openBasedir": 0
      }

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = false

      const resData = await axios.post("https://okabadiwala.com:8090/cloudAPI/", data, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic YWRtaW46JEFuZGVlcDAzMQ=="
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        })
      },);
      console.log("🚀 ~ file: website-controller.js:104 ~ WebsiteController ~ test ~ resData", resData)
      if (resData.status === 200) {
        return res.status(200).json({
          success: true,
          data: resData.data,
        })
      } else {
        return res.status(400).json({
          success: false,
          error: resData.data.error_message,
        })
      }



    } catch (error) {
      console.log("🚀 ~ file: website-controller.js:96 ~ WebsiteController ~ test ~ error", error)
      return res.json({
        success: false,
        error,
      });
    }
  }
}

module.exports = new WebsiteController();
