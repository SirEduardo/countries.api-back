const mongoose = require("mongoose");
const Countries = require("../../api/models/countries");
const countries = require("./countries");

const CountriesSeed = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://eduardosaanchezlopez:OaY3LwGXCn5cF4oL@country-api.ucl64.mongodb.net/?retryWrites=true&w=majority&appName=country-api",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    await Countries.collection.drop();
    console.log("Countries eliminados");

    await Countries.insertMany(countries);
    console.log("Countries introducidos");

    await mongoose.disconnect();
    console.log("Desconectado de la base de datos");
  } catch (error) {
    console.error("Error al insertar países:", error);
  }
};

CountriesSeed();
