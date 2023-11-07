const express = require("express");
const paymentStatusModel = require("../models/paymentStatus");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.json());

// Save post
router.post("/", async(req,res) => {

  const paymentStatus = new paymentStatusModel(req.body);
  
  try {
      const response = await paymentStatus.save();
      res.json(response);
  } catch (err) {
      res.json(err);
  }

});

router.get("/", async(req,res) => {
    try {
        const response = await paymentStatusModel.find({});
        res.json(response);
        //console.log(response.data);
    } catch (err) {
        res.json(err);
    }
});

router.get('/getPayment/:id',function(req,res){
    const id = req.params.id;
    paymentStatusModel.findById({_id:id}).then(function(foundDoc){
        res.send(foundDoc);
    })
})

router.put('/:id', function(req,res){
    const id = req.params.id; 
    paymentStatusModel.updateOne(
        {_id:id},
        {stuNIC:req.body.stuNIC, stuName: req.body.stuName, paymentStatus: req.body.paymentStatus},
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
    paymentStatusModel.deleteOne(
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