<<<<<<< HEAD:MERN/server/models/course.js
const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  coursename: {
    type: String,
    required: true,
  },
  
  fee: {
    type: Number,
    required: true,
  },
  day: {
    type:String,
    required: true,
  },
  duration:{
    type:Number,
    required: true,
  }
});
module.exports = mongoose.model("courses", CourseSchema);

=======
const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseId:{
    type: String,
    required: true,
  },
  coursename: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  day: {
    type:String,
    required: true,
  },
  duration:{
    type:Number,
    required: true,
  }
});
module.exports = mongoose.model("courses", CourseSchema);

>>>>>>> 3b889d6bc5386637b479627fe3e1b5e0c38fe46f:MERN_FINAL/MERN/server/models/course.js
