const mongoose = require("mongoose");

let conn = null;
const mongoURI = "mongodb+srv://keisidoci:ZnOCpP05ejXDodKt@cluster0.hh8rwuy.mongodb.net/firstdb:retryWrites=true&w=majority";

module.exports = connectDatabase = async () => {
  try {
    if (conn == null) {
      console.log("Creating new connection to database...");
      console.log(mongoURI);
      conn = await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      return conn;
    }
    console.log("Connection already established, reusing the connection...");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};
