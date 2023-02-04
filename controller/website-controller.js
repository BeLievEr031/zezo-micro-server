let axios = require("axios");
class WebsiteController {
  async createWebsite(req, res, next) {
    try {
      const { domain } = req.body;
      console.log(domain);
      // const { authorization } = req.headers;
      console.log(req.headers);
      if (!domain) {
        return res.json({
          success: false,
          data: "Domain required...",
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
          domainName: "sandy031.in",
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
}

module.exports = new WebsiteController();
