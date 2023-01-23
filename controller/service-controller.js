const services = require("../services/service-services");
const serviceDto = require("../dto/serviceDto");
const axios = require("axios");
class ServiceController {
  async addService(req, res) {
    console.log(req.body);

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5500/api/auth/register/admin",
        data: req.body,
      });

      console.log(response.data);
      const serviceData = {
        email: req.body.email,
        password: req.body.password,
        productId: "63b6787d73efc041eabdae80",
        order_id: "63b6787d73efc041eabdae80",
        domain: "63b6787d73efc041eabdae80",
        fish: "63b6787d73efc041eabdae80",
        payment_Id: "63b6787d73efc041eabdae80",
        createdBy: "63b6787d73efc041eabdae80",
      };

      if (response.data.status === "success") {
        let result = await services.add(serviceData);
        result = new serviceDto(result);
        return res.status(200).json({
          success: true,
          data: result,
        });
      }

      return res.json({
        status: "fail",
        data: "Internal server error try again",
      });
    } catch (error) {
      return res.json({
        success: false,
        data: error.message,
      });
    }
  }
}

module.exports = new ServiceController();
