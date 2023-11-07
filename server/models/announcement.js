const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
    courseId:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Announcements", announcementSchema);