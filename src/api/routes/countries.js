const express = require("express");
const { getCountries, getCountry } = require("../controllers/countries");
const countryRouter = express.Router();

countryRouter.get("/", getCountries);
countryRouter.get("/:name", getCountry);

module.exports = countryRouter;
