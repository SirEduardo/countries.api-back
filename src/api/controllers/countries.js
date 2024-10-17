const Countries = require("../models/countries");

const getCountries = async (req, res, next) => {
  try {
    const countries = await Countries.find();
    return res.status(200).json(countries);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getCountry = async (req, res, next) => {
  try {
    const { name } = req.params;
    const country = await Countries.findOne({ name });
    if (!country) return res.status(404).json({ message: "Country not found" });
    return res.status(200).json(country);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getCountries, getCountry };
