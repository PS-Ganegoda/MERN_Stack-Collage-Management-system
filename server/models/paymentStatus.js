const mongoose = require("mongoose");

const paymentStatusSchema = new mongoose.Schema({
    stuNIC:{
        type: String,
        required: true,
    },
    stuName:{
        type: String,
        required: true,
    },
    paymentStatus:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Payment", paymentStatusSchema);
