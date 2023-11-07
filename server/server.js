<<<<<<< HEAD:MERN/server/server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
//middle routes
//const postRoutes = require("./routes/student");
const studentRouter = require("./routes/student");
const courseRouter = require("./routes/course");

// app middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
// rout middleware
app.use("/student",studentRouter);
app.use("/course",courseRouter);

const PORT = 8080;

const DB_URL =`mongodb+srv://mernproject2023:Mern@cluster0.mmwimf0.mongodb.net/`;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log("DB error", err));

app.listen(PORT, () => {
  console.log(`port is running on ${PORT}`);
});



=======
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

//middle routes
//const postRoutes = require("./routes/student");
const studentRouter = require("./routes/student");
const instructorRouter = require("./routes/instructor");
const courseRouter = require("./routes/course");
const announcementRouter = require("./routes/announcement");
const paymentStatusRouter = require("./routes/paymentStatus");
const studentAuthRouter = require("./routes/studentAuth");
const instructorAuthRouter = require("./routes/instructorAuth");
const adminAuthRouter = require("./routes/adminAuth");

// app middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// rout middleware
app.use("/student",studentRouter);
app.use("/instructor",instructorRouter);
app.use("/course", courseRouter);
app.use("/announcement",announcementRouter);
app.use("/paymentStatus",paymentStatusRouter);
app.use("/studentAuth",studentAuthRouter);
app.use("/instructorAuth", instructorAuthRouter);
app.use("/adminAuth", adminAuthRouter);

const PORT = 8080;

const DB_URL =`mongodb+srv://mernproject2023:Mern@cluster0.mmwimf0.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log("DB error", err));

app.listen(PORT, () => {
  console.log(`port is running on ${PORT}`);
});



>>>>>>> 3b889d6bc5386637b479627fe3e1b5e0c38fe46f:MERN_FINAL/MERN/server/server.js
