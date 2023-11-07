const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  NIC: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  adress: {
    type: String
  },
  Tele_no: {
    type: String,
    required: true,
  },
  birthDay: {
    type:String
  },
  email:{
    type:String
  }
});
module.exports = mongoose.model("Students", studentSchema);


