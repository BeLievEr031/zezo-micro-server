let axios = require("axios");
const { exec } = require("child_process");
var SSH2Shell = require("ssh2shell");
const https = require("https");
// let {replaceString} = require("replace-string");

// const { readFileSync } = require('fs');

const { Client } = require("ssh2");
const { log } = require("console");
class WebsiteController {
  // async createWebsite(req, res, next) {
  //   try {
  //     console.log("hiughiadhgidhgpfihgifu");
  //     return res.json({
  //       success: true,
  //     });
  //     const { domain } = req.body;
  //     console.log(
  //       "🚀 ~ file: website-controller.js:6 ~ WebsiteController ~ createWebsite ~ req.body",
  //       req.body
  //     );
  //     if (
  //       !req.body.domain ||
  //       req.body.domain === "" ||
  //       req.body.domain === undefined
  //     ) {
  //       return res.status(400).json({
  //         success: false,
  //         error: "Domain name is required",
  //       });
  //     }

  //     let data = {
  //       serverUserName: "admin",
  //       controller: "submitWebsiteCreation",
  //       domainName: domain,
  //       package: "Default",
  //       adminEmail: "sandy@gmail.com",
  //       phpSelection: "PHP 7.4",
  //       websiteOwner: "admin",
  //       ssl: 0,
  //       dkimCheck: 0,
  //       openBasedir: 0,
  //     };

  //     let res = await axios({
  //       url: "https://okabadiwala.com:8090/cloudAPI/",
  //       method: "post",
  //       data: {
  //         serverUserName: "admin",
  //         controller: "submitWebsiteCreation",
  //         domainName: "hellosijzhjkdfkdhkhjfdjhfsjd.in",
  //         package: "Default",
  //         adminEmail: "sandy@cyberpersons.com",
  //         phpSelection: "PHP 7.4",
  //         websiteOwner: "admin",
  //         ssl: 0,
  //         dkimCheck: 0,
  //         openBasedir: 0,
  //       },
  //       headers: req.headers,
  //     });

  //     console.log(res.data);
  //     res.json({
  //       success: true,
  //       data: res.data,
  //     });
  //   } catch (error) {
  //     return res.json({
  //       success: false,
  //       error,
  //     });
  //   }
  // }

  // @############Website Functions##################@

  async createWebsite(req, res, next) {
    try {
      if (
        !req.body.domain ||
        req.body.domain === "" ||
        req.body.domain === undefined
      ) {
        return res.status(400).json({
          success: false,
          error: "Domain name is required",
        });
      }

      const data = {
        serverUserName: "admin",
        controller: "submitWebsiteCreation",
        domainName: req.body.domain,
        package: "Default",
        adminEmail: "sandy@cyberpersons.com",
        phpSelection: "PHP 7.4",
        websiteOwner: "admin",
        ssl: 0,
        dkimCheck: 0,
        openBasedir: 0,
      };

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = false;

      const resData = await axios.post(
        "https://okabadiwala.com:8090/cloudAPI/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46JEFuZGVlcDAzMQ==",
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      );
      // console.log(
      //   "🚀 ~ file: website-controller.js:104 ~ WebsiteController ~ test ~ resData",
      //   resData
      // );
      if (resData.status === 200) {
        console.log("fire   ");
        return res.status(200).json({
          success: true,
          data: resData.data,
        });
      } else {
        console.log("water   ");

        return res.status(400).json({
          success: false,
          error: resData.data.error_message,
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: website-controller.js:96 ~ WebsiteController ~ test ~ error",
        error
      );
      return res.json({
        success: false,
        data: error.message,
      });
    }
  }

  async fetchWebsite(req, res, next) {
    try {
      if (
        !req.body.domain ||
        req.body.domain === "" ||
        req.body.domain === undefined
      ) {
        return res.status(400).json({
          success: false,
          error: "Domain name is required",
        });
      }

      const data = {
        serverUserName: "admin",
        controller: "fetchWebsites",
        websiteName: req.body.domain,
        page: 1,
      };

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = false;

      const resData = await axios.post(
        "https://okabadiwala.com:8090/cloudAPI/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46JEFuZGVlcDAzMQ==",
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      );
      // console.log(
      //   "🚀 ~ file: website-controller.js:104 ~ WebsiteController ~ test ~ resData",
      //   resData
      // );
      if (resData.status === 200) {
        return res.status(200).json({
          success: true,
          data: JSON.stringify(resData.data),
        });
      } else {
        console.log("water   ");

        return res.status(400).json({
          success: false,
          error: resData.data.error_message,
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: website-controller.js:96 ~ WebsiteController ~ test ~ error",
        error
      );
      return res.json({
        success: false,
        data: error.message,
      });
    }
  }

  async deleteWebsite(req, res, next) {
    try {
      if (
        !req.body.domain ||
        req.body.domain === "" ||
        req.body.domain === undefined
      ) {
        return res.status(400).json({
          success: false,
          error: "Domain name is required",
        });
      }

      const data = {
        serverUserName: "admin",
        controller: "submitWebsiteDeletion",
        websiteName: req.body.domain,
      };

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = false;

      const resData = await axios.post(
        "https://okabadiwala.com:8090/cloudAPI/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46JEFuZGVlcDAzMQ==",
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      );
      // console.log(
      //   "🚀 ~ file: website-controller.js:104 ~ WebsiteController ~ test ~ resData",
      //   resData
      // );
      if (resData.status === 200) {
        return res.status(200).json({
          success: true,
          data: JSON.stringify(resData.data),
        });
      } else {
        console.log("water   ");

        return res.status(400).json({
          success: false,
          error: resData.data.error_message,
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: website-controller.js:96 ~ WebsiteController ~ test ~ error",
        error
      );
      return res.json({
        success: false,
        data: error.message,
      });
    }
  }

  async changePhpVersion(req, res, next) {
    try {
      if (
        !req.body.domain ||
        req.body.domain === "" ||
        req.body.domain === undefined ||
        !req.body.php ||
        req.body.php === "" ||
        req.body.php === undefined
      ) {
        return res.status(400).json({
          success: false,
          error: "all fields are  required ",
        });
      }

      const data = {
        serverUserName: "admin",
        controller: "changePHP",
        childDomain: req.body.domain,
        phpSelection: `PHP ${req.body.php}`,
      };

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = false;

      const resData = await axios.post(
        "https://okabadiwala.com:8090/cloudAPI/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46JEFuZGVlcDAzMQ==",
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      );
      // console.log(
      //   "🚀 ~ file: website-controller.js:104 ~ WebsiteController ~ test ~ resData",
      //   resData
      // );
      if (resData.status === 200) {
        return res.status(200).json({
          success: true,
          data: JSON.stringify(resData.data),
        });
      } else {
        console.log("water   ");

        return res.status(400).json({
          success: false,
          error: resData.data.error_message,
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: website-controller.js:96 ~ WebsiteController ~ test ~ error",
        error
      );
      return res.json({
        success: false,
        data: error.message,
      });
    }
  }

  // @############Package Functions##################@
  async createPackage(req, res, next) {
    try {
      if (
        !req.body.package ||
        req.body.package === "" ||
        req.body.package === undefined
      ) {
        return res.status(400).json({
          success: false,
          error: "all fields are  required ",
        });
      }

      const data = {
        serverUserName: "admin",
        controller: "submitPackage",
        packageName: req.body.package,
        diskSpace: "100",
        bandwidth: "100",
        dataBases: "100",
        ftpAccounts: "100",
        emails: "100",
        allowedDomains: "1",
        allowedDomains: "1",
        api: "1",
        allowFullDomain: "1",
      };

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = false;

      const resData = await axios.post(
        "https://okabadiwala.com:8090/cloudAPI/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46JEFuZGVlcDAzMQ==",
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      );
      // console.log(
      //   "🚀 ~ file: website-controller.js:104 ~ WebsiteController ~ test ~ resData",
      //   resData
      // );
      if (resData.status === 200) {
        return res.status(200).json({
          success: true,
          data: JSON.stringify(resData.data),
        });
      } else {
        console.log("water   ");

        return res.status(400).json({
          success: false,
          error: resData.data.error_message,
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: website-controller.js:96 ~ WebsiteController ~ test ~ error",
        error
      );
      return res.json({
        success: false,
        data: error.message,
      });
    }
  }

  async deletePackage(req, res, next) {
    try {
      if (
        !req.body.package ||
        req.body.package === "" ||
        req.body.package === undefined
      ) {
        return res.status(400).json({
          success: false,
          error: "all fields are  required ",
        });
      }

      const data = {
        serverUserName: "admin",
        controller: "submitPackageDelete",
        packageName: req.body.package,
      };

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = false;

      const resData = await axios.post(
        "https://okabadiwala.com:8090/cloudAPI/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46JEFuZGVlcDAzMQ==",
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      );
      // console.log(
      //   "🚀 ~ file: website-controller.js:104 ~ WebsiteController ~ test ~ resData",
      //   resData
      // );
      if (resData.status === 200) {
        return res.status(200).json({
          success: true,
          data: JSON.stringify(resData.data),
        });
      } else {
        console.log("water   ");

        return res.status(400).json({
          success: false,
          error: resData.data.error_message,
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: website-controller.js:96 ~ WebsiteController ~ test ~ error",
        error
      );
      return res.json({
        success: false,
        data: error.message,
      });
    }
  }

  async fetchPackage(req, res, next) {
    try {
      const data = {
        serverUserName: "admin",
        controller: "fetchPackages",
      };

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = false;

      const resData = await axios.post(
        "https://okabadiwala.com:8090/cloudAPI/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46JEFuZGVlcDAzMQ==",
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      );
      // console.log(
      //   "🚀 ~ file: website-controller.js:104 ~ WebsiteController ~ test ~ resData",
      //   resData
      // );
      if (resData.status === 200) {
        return res.status(200).json({
          success: true,
          data: JSON.stringify(resData.data),
        });
      } else {
        console.log("water   ");

        return res.status(400).json({
          success: false,
          error: resData.data.error_message,
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: website-controller.js:96 ~ WebsiteController ~ test ~ error",
        error
      );
      return res.json({
        success: false,
        data: error.message,
      });
    }
  }

  async modifyPackage(req, res, next) {
    try {
      // console.log(req.body.diskSpace);

      if (
        !req.body.package ||
        req.body.package === "" ||
        req.body.package === undefined
      ) {
        return res.status(400).json({
          success: false,
          error: "all fields are  required ",
        });
      }

      const data = {
        serverUserName: "admin",
        controller: "submitPackageModify",
        packageName: req.body.package,
        diskSpace: req.body.diskSpace ? +req.body.diskSpace : 100,
        bandwidth: req.body.bandwidth ? +req.body.bandwidth : 100,
        dataBases: req.body.dataBases ? +req.body.dataBases : 100,
        ftpAccounts: req.body.ftpAccounts ? +req.body.ftpAccounts : 50,
        emails: req.body.emails ? +req.body.emails : 100,
        allowedDomains: req.body.allowedDomains ? +req.body.allowedDomains : 1,
        api: req.body.api ? +req.body.api : 1,
        allowFullDomain: +req.body.allowFullDomain
          ? +req.body.allowFullDomain
          : 1,
      };

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = false;

      const resData = await axios.post(
        "https://okabadiwala.com:8090/cloudAPI/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46JEFuZGVlcDAzMQ==",
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      );
      // console.log(
      //   "🚀 ~ file: website-controller.js:104 ~ WebsiteController ~ test ~ resData",
      //   resData
      // );
      if (resData.status === 200) {
        return res.status(200).json({
          success: true,
          data: JSON.stringify(resData.data),
        });
      } else {
        console.log("water   ");

        return res.status(400).json({
          success: false,
          error: resData.data.error_message,
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: website-controller.js:96 ~ WebsiteController ~ test ~ error",
        error
      );
      return res.json({
        success: false,
        data: error.message,
      });
    }
  }

  // @############FTP Functions##################@
  async createFTP(req, res, next) {
    try {
      // console.log(req.body.diskSpace);

      if (
        !req.body.domain ||
        req.body.domain === "" ||
        req.body.domain === undefined ||
        !req.body.user ||
        req.body.user === "" ||
        req.body.user === undefined ||
        !req.body.password ||
        req.body.password === "" ||
        req.body.password === undefined
      ) {
        return res.status(400).json({
          success: false,
          error: "all fields are  required ",
        });
      }

      const data = {
        serverUserName: "admin",
        controller: "submitFTPCreation",
        ftpDomain: req.body.domain,
        ftpUserName: req.body.user,
        passwordByPass: req.body.password,
        path: "",
      };

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = false;

      const resData = await axios.post(
        "https://okabadiwala.com:8090/cloudAPI/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46JEFuZGVlcDAzMQ==",
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      );
      // console.log(
      //   "🚀 ~ file: website-controller.js:104 ~ WebsiteController ~ test ~ resData",
      //   resData
      // );
      if (resData.status === 200) {
        return res.status(200).json({
          success: true,
          data: JSON.stringify(resData.data),
        });
      } else {
        return res.status(400).json({
          success: false,
          error: resData.data.error_message,
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: website-controller.js:96 ~ WebsiteController ~ test ~ error",
        error
      );
      return res.json({
        success: false,
        data: error.message,
      });
    }
  }

  async deleteFTP(req, res, next) {
    try {
      // console.log(req.body.user);

      if (
        !req.body.user ||
        req.body.user === "" ||
        req.body.user === undefined
      ) {
        return res.status(400).json({
          success: false,
          error: "all fields are  required ",
        });
      }

      const data = {
        serverUserName: "admin",
        controller: "submitFTPDelete",
        ftpUsername: req.body.user,
      };

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = false;

      const resData = await axios.post(
        "https://okabadiwala.com:8090/cloudAPI/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46JEFuZGVlcDAzMQ==",
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      );
      // console.log(
      //   "🚀 ~ file: website-controller.js:104 ~ WebsiteController ~ test ~ resData",
      //   resData
      // );
      if (resData.status === 200) {
        return res.status(200).json({
          success: true,
          data: JSON.stringify(resData.data),
        });
      } else {
        console.log("water   ");

        return res.status(400).json({
          success: false,
          error: resData.data.error_message,
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: website-controller.js:96 ~ WebsiteController ~ test ~ error",
        error
      );
      return res.json({
        success: false,
        data: error.message,
      });
    }
  }

  async fetchFTP(req, res, next) {
    try {
      // console.log(req.body.user);

      if (
        !req.body.domain ||
        req.body.domain === "" ||
        req.body.domain === undefined
      ) {
        return res.status(400).json({
          success: false,
          error: "all fields are  required ",
        });
      }

      const data = {
        serverUserName: "admin",
        controller: "getAllFTPAccounts",
        selectedDomain: req.body.domain,
      };

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = false;

      const resData = await axios.post(
        "https://okabadiwala.com:8090/cloudAPI/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46JEFuZGVlcDAzMQ==",
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      );
      // console.log(
      //   "🚀 ~ file: website-controller.js:104 ~ WebsiteController ~ test ~ resData",
      //   resData
      // );
      if (resData.status === 200) {
        return res.status(200).json({
          success: true,
          data: JSON.stringify(resData.data),
        });
      } else {
        console.log("water   ");

        return res.status(400).json({
          success: false,
          error: resData.data.error_message,
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: website-controller.js:96 ~ WebsiteController ~ test ~ error",
        error
      );
      return res.json({
        success: false,
        data: error.message,
      });
    }
  }

  // @############Email Functions##################@
  async createEmail(req, res, next) {
    try {
      // console.log(req.body.user);

      if (
        !req.body.domain ||
        req.body.domain === "" ||
        req.body.domain === undefined ||
        !req.body.user ||
        req.body.user === "" ||
        req.body.user === undefined ||
        !req.body.password ||
        req.body.password === "" ||
        req.body.password === undefined
      ) {
        return res.status(400).json({
          success: false,
          error: "all fields are  required ",
        });
      }

      const data = {
        serverUserName: "admin",
        controller: "submitEmailCreation",
        domain: req.body.domain,
        username: req.body.user,
        passwordByPass: req.body.password,
      };

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = false;

      const resData = await axios.post(
        "https://okabadiwala.com:8090/cloudAPI/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46JEFuZGVlcDAzMQ==",
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      );
      // console.log(
      //   "🚀 ~ file: website-controller.js:104 ~ WebsiteController ~ test ~ resData",
      //   resData
      // );
      if (resData.status === 200) {
        return res.status(200).json({
          success: true,
          data: JSON.stringify(resData.data),
        });
      } else {
        console.log("water   ");

        return res.status(400).json({
          success: false,
          error: resData.data.error_message,
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: website-controller.js:96 ~ WebsiteController ~ test ~ error",
        error
      );
      return res.json({
        success: false,
        data: error.message,
      });
    }
  }

  async deleteEmail(req, res, next) {
    try {
      // console.log(req.body.user);

      if (
        !req.body.email ||
        req.body.email === "" ||
        req.body.email === undefined
      ) {
        return res.status(400).json({
          success: false,
          error: "all fields are  required ",
        });
      }

      const data = {
        serverUserName: "admin",
        controller: "submitEmailDeletion",
        email: req.body.email,
      };

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = false;

      const resData = await axios.post(
        "https://okabadiwala.com:8090/cloudAPI/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46JEFuZGVlcDAzMQ==",
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      );
      // console.log(
      //   "🚀 ~ file: website-controller.js:104 ~ WebsiteController ~ test ~ resData",
      //   resData
      // );
      if (resData.status === 200) {
        return res.status(200).json({
          success: true,
          data: JSON.stringify(resData.data),
        });
      } else {
        console.log("water   ");

        return res.status(400).json({
          success: false,
          error: resData.data.error_message,
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: website-controller.js:96 ~ WebsiteController ~ test ~ error",
        error
      );
      return res.json({
        success: false,
        data: error.message,
      });
    }
  }

  async fetchEmail(req, res, next) {
    try {
      // console.log(req.body.user);

      if (
        !req.body.domain ||
        req.body.domain === "" ||
        req.body.domain === undefined
      ) {
        return res.status(400).json({
          success: false,
          error: "all fields are  required ",
        });
      }

      const data = {
        serverUserName: "admin",
        controller: "getEmailsForDomain",
        domain: req.body.domain,
      };

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = false;

      const resData = await axios.post(
        "https://okabadiwala.com:8090/cloudAPI/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46JEFuZGVlcDAzMQ==",
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      );
      // console.log(
      //   "🚀 ~ file: website-controller.js:104 ~ WebsiteController ~ test ~ resData",
      //   resData
      // );
      if (resData.status === 200) {
        return res.status(200).json({
          success: true,
          data: JSON.stringify(resData.data),
        });
      } else {
        console.log("water   ");

        return res.status(400).json({
          success: false,
          error: resData.data.error_message,
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: website-controller.js:96 ~ WebsiteController ~ test ~ error",
        error
      );
      return res.json({
        success: false,
        data: error.message,
      });
    }
  }

  // @############DNS Functions##################@

  async createDNS(req, res, next) {
    try {
      // console.log(req.body.user);

      if (
        !req.body.domain ||
        req.body.domain === "" ||
        req.body.domain === undefined ||
        !req.body.user ||
        req.body.user === "" ||
        req.body.user === undefined
      ) {
        return res.status(400).json({
          success: false,
          error: "all fields are  required ",
        });
      }

      const data = {
        serverUserName: "admin",
        controller: "addDNSRecord",
        selectedZone: req.body.domain,
        recordName: req.body.user,
        recordContentA: "192.168.100.1",
        ttl: 1400,
        recordType: "A",
      };

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = false;

      const resData = await axios.post(
        "https://okabadiwala.com:8090/cloudAPI/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46JEFuZGVlcDAzMQ==",
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      );
      // console.log(
      //   "🚀 ~ file: website-controller.js:104 ~ WebsiteController ~ test ~ resData",
      //   resData
      // );
      if (resData.status === 200) {
        return res.status(200).json({
          success: true,
          data: JSON.stringify(resData.data),
        });
      } else {
        console.log("water   ");

        return res.status(400).json({
          success: false,
          error: resData.data.error_message,
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: website-controller.js:96 ~ WebsiteController ~ test ~ error",
        error
      );
      return res.json({
        success: false,
        data: error.message,
      });
    }
  }

  async fetchDNS(req, res, next) {
    try {
      // console.log(req.body.user);

      if (
        !req.body.domain ||
        req.body.domain === "" ||
        req.body.domain === undefined
      ) {
        return res.status(400).json({
          success: false,
          error: "all fields are  required ",
        });
      }

      const data = {
        serverUserName: "admin",
        controller: "getCurrentRecordsForDomain",
        selectedZone: req.body.domain,
        currentSelection: "aRecord",
      };

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = false;

      const resData = await axios.post(
        "https://okabadiwala.com:8090/cloudAPI/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46JEFuZGVlcDAzMQ==",
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      );
      // console.log(
      //   "🚀 ~ file: website-controller.js:104 ~ WebsiteController ~ test ~ resData",
      //   resData
      // );
      if (resData.status === 200) {
        return res.status(200).json({
          success: true,
          data: JSON.stringify(resData.data),
        });
      } else {
        console.log("water   ");

        return res.status(400).json({
          success: false,
          error: resData.data.error_message,
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: website-controller.js:96 ~ WebsiteController ~ test ~ error",
        error
      );
      return res.json({
        success: false,
        data: error.message,
      });
    }
  }
  async deleteDNS(req, res, next) {
    try {
      // console.log(req.body.user);

      if (!req.body.id || req.body.id === "" || req.body.id === undefined) {
        return res.status(400).json({
          success: false,
          error: "all fields are  required ",
        });
      }

      const data = {
        serverUserName: "admin",
        controller: "deleteDNSRecord",
        id: +req.body.id,
      };

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = false;

      const resData = await axios.post(
        "https://okabadiwala.com:8090/cloudAPI/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46JEFuZGVlcDAzMQ==",
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      );
      // console.log(
      //   "🚀 ~ file: website-controller.js:104 ~ WebsiteController ~ test ~ resData",
      //   resData
      // );
      if (resData.status === 200) {
        return res.status(200).json({
          success: true,
          data: JSON.stringify(resData.data),
        });
      } else {
        console.log("water   ");

        return res.status(400).json({
          success: false,
          error: resData.data.error_message,
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: website-controller.js:96 ~ WebsiteController ~ test ~ error",
        error
      );
      return res.json({
        success: false,
        data: error.message,
      });
    }
  }

  // @############SSH Functions##################@
  async loginToSsh(req, res, next) {
    try {
      // const client = new Client();
      // client
      //   .on("ready", () => {
      //     console.log("Client :: ready");
      //     client.shell((err, stream) => {
      //       stream
      //         .on("close", (code) => {
      //           console.log("stream :: close\n", { code });
      //         })
      //         .on("data", (myData) => {
      //           console.log("stream :: data\n", myData.toString());
      //         })
      //         .on("exit", (code) => {
      //           console.log("stream :: exit\n", { code });
      //           client.end();
      //         })
      //         .on("error", (e) => {
      //           console.log("stream :: error\n", { e });
      //           rej(e);
      //         });

      //       stream.write(
      //         "cd /home/okabadiwala.com/public_html && touch name.txt"
      //       );
      //       // stream.s
      //     });
      //   }).connect({
      //     host: "139.59.73.58",
      //     port: 22,
      //     username: "root",
      //     password: "$Andeep031R",
      //     exec: "",
      //   });

      // const SSH = new SSH2Shell({
      //   server: {
      //     host: "139.59.73.58",
      //     userName: "root",
      //     password: "$Andeep031R",
      //   },
      //   commands: ["cd /home/okabadiwala.com/public_html", "ls -l"],
      // });
      // const callback = function (sessionText) {
      //   console.log(sessionText);
      // };

      // SSH.connect(callback);

      var host = {
        server: {
          host: "139.59.73.58",
          userName: "root",
          password: "$Andeep031R",
        },
        commands: [
          "cd /home/okabadiwala.com/public_html && touch text2.txt",
          "ls -l",
        ],
      };

      const SSH = new SSH2Shell(host);

      var callback = function (sessionText) {
        console.log(sessionText);
      };

      await SSH.connect(callback);

      return res.json({ success: true, data: "New Theme Applied..." });
    } catch (error) {
      return res.json({ success: false, data: error.message });
    }
  }
}

module.exports = new WebsiteController();
