var mongoose = require("mongoose");
const productschema = new mongoose.Schema({
  company_name: {
    type: String,
  },
  ownername: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  wym: {
    type: String,
  },
  remarks: {
    type: String,
  },
});
module.exports = mongoose.model("ContactUs", productschema);
