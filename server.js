require("dotenv").config();
const express = require("express");
require("./db/dbConnect")();
const router = require("./routes");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

const corsOptions = {
  origin: ["https://zezosoft.in"],
};

const PORT = process.env.PORT || 5500;

app.use(cors(corsOptions));

app.use("/api", router);
app.listen(PORT, () => {
  console.log("conected to the server port", PORT);
});
