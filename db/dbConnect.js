const mongoose = require("mongoose");

module.exports = dbConnect = () => {
  mongoose.set("strictQuery", true);

  mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("Connected to database");
  });
};
