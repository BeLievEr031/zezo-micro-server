require("dotenv").config();
const express = require("express");
require("./db/dbConnect")();
const router = require("./routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: ["https://zezosoft.in"],
};

const PORT = process.env.PORT || 5500;

app.use(cors(corsOptions));

app.use("/api", router);
app.listen(PORT, () => {
  console.log("conected to the server port", PORT);
});
