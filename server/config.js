const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 8000,
  DB: process.env.DB
};
