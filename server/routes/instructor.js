const express = require("express");
const InstructorModel = require("../models/instructor");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.json());

// Save post
router.post("/", async(req,res) => {

  const ins = new InstructorModel(req.body);
  
  try {
      const response = await ins.save();
      res.json(response);
  } catch (err) {
      res.json(err);
  }

});

router.get("/", async(req,res) => {
  try {
      const response = await InstructorModel.find({});
      res.json(response);
      //console.log(response.data);
  } catch (err) {
      res.json(err);
  }
});

router.get('/getInstructor/:id',function(req,res){
    const id = req.params.id;
    InstructorModel.findById({_id:id}).then(function(foundDoc){
        res.send(foundDoc);
    })
})

router.put('/:id', function(req,res){
  const id = req.params.id;
  InstructorModel.updateOne(
      {_id:id},
      {name: req.body.name, adress: req.body.adress, Tele_no: req.body.Tele_no, birthDay: req.body.birthDay, email: req.body.email},
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
  InstructorModel.deleteOne(
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
