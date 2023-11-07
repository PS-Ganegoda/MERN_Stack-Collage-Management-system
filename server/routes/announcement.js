const express = require("express");
const AnnouncementModel = require("../models/announcement");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.json());

//Save post
router.post("/", async(req,res) => {

  const announcement = new AnnouncementModel(req.body);
  
  try {
      const response = await announcement.save();
      res.json(response);
  } catch (err) {
      res.json(err);
  }

});

router.get("/", async(req,res) => {
    try {
        const response = await AnnouncementModel.find({});
        res.json(response);
        //console.log(response.data);
    } catch (err) {
        res.json(err);
    }
});

router.get('/getAnnouncement/:id',function(req,res){
    const id = req.params.id;
    AnnouncementModel.findById({_id:id}).then(function(foundDoc){
        res.send(foundDoc);
    })
})

router.put('/:id', function(req,res){
    const id = req.params.id; 
    AnnouncementModel.updateOne(
        {_id:id},
        {courseId:req.body.courseId, date: req.body.date, description: req.body.description},
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
    AnnouncementModel.deleteOne(
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