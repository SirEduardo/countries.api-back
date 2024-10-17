require("dotenv").config();
const express = require("express");
const countryRouter = require("./src/api/routes/countries");
const cors = require("cors");
const { connectDB } = require("./src/config/db");

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/v1/countries", countryRouter);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
