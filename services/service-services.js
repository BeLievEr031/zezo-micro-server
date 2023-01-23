const serviceModel = require("../models/service-model");
class ServiceServices {
  async add(data) {
    try {
      const result = await serviceModel.create(data);
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = new ServiceServices();
