const mongoose = require("mongoose");

const registrationSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  emailAddress: { type: String, required: true },
});

module.exports = mongoose.model("Registration", registrationSchema);
