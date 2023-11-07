const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
  NIC: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String
  },
  Tele_no: {
    type: Number,
    required: true,
  },
  birthDay: {
    type:String
  },
  email:{
    type:String
  }
});
module.exports = mongoose.model("Instructors", instructorSchema);


