let axios = require("axios");

let header = {
  Authorization: "Basic YWRtaW46JEFuZGVlcDAzMQ==",
  "content-type": "application/json",
  "user-agent": "PostmanRuntime/7.30.1",
  accept: "*/*",
  "postman-token": "b4a5a167-623f-462d-84bb-682b6af6eb55",
  host: "localhost:5000",
  "accept-encoding": "gzip, deflate, br",
  connection: "keep-alive",
  "content-length": "27",
};

const addWebsite = async () => {
  try {
    let res = await axios({
      url: "https://okabadiwala.com:8090/cloudApi/",
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
      headers: header,
    });

    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
};

addWebsite();
