<<<<<<< HEAD:MERN/server/routes/course.js
const express = require("express");
const CourseModel = require("../models/course");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.json());

// Save post
router.post("/", async(req,res) => {

  const course = new CourseModel(req.body);

  //console.log(recipe);
  
  try {
      const response = await course.save();
      res.json(response);
  } catch (err) {
      res.json(err);
  }

});

router.get("/", async(req,res) => {
  try {
      const response = await CourseModel.find({});
      res.json(response);
      //console.log(response.data);
  } catch (err) {
      res.json(err);
  }
});

router.put('/:id', function(req,res){
  const id = req.params.id;
  CourseModel.updateOne(
      {_id:id},
      {coursename: req.body.coursename, fee: req.body.fee,  Day: req.body.Day,duration: req.body.duration},
      {new: true} // Option to return the updated document
  )
  .then(function(updatedArticle){
      if (updatedArticle) {
          res.send("Sussessfully update articles")
      } 
      else {
          res.send("Sussessfully update articles")        }
  });
});

router.delete('/:id',function(req,res){
  const id = req.params.id;
  StudentModel.deleteOne(
      {_id:id}
  )
  .then(function(deleteArticle){
      if (deleteArticle) {
          res.send("Sussessfully delete articles")
      } 
      else {
          res.send("Sussessfully delete articles")        }
  });
});

module.exports = router;
=======
const express = require("express");
const CourseModel = require("../models/course");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.json());

// Save post
router.post("/", async(req,res) => {

  const course = new CourseModel(req.body);
  
  try {
      const response = await course.save();
      res.json(response);
  } catch (err) {
      res.json(err);
  }

});

router.get("/", async(req,res) => {
  try {
      const response = await CourseModel.find({});
      res.json(response);
      //console.log(response.data);
  } catch (err) {
      res.json(err);
  }
});

router.get('/getCourse/:id',function(req,res){
    const id = req.params.id;
    CourseModel.findById({_id:id}).then(function(foundDoc){
        res.send(foundDoc);
    })
})

router.put('/:id', function(req,res){
  const id = req.params.id;
  CourseModel.updateOne(
      {_id:id},
      {coursename: req.body.coursename, fee: req.body.fee,  Day: req.body.Day,duration: req.body.duration},
      {new: true} // Option to return the updated document
  )
  .then(function(updatedArticle){
      if (updatedArticle) {
          res.send("Sussessfully update articles")
      } 
      else {
          res.send("Sussessfully update articles")        }
  });
});

router.delete('/:id',function(req,res){
  const id = req.params.id;
  CourseModel.deleteOne(
      {_id:id}
  )
  .then(function(deleteArticle){
      if (deleteArticle) {
          res.send("Sussessfully delete articles")
      } 
      else {
          res.send("Sussessfully delete articles")        }
  });
});

module.exports = router;
>>>>>>> 3b889d6bc5386637b479627fe3e1b5e0c38fe46f:MERN_FINAL/MERN/server/routes/course.js
