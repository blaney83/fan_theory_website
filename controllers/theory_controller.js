
const express = require("express");
const router = express.Router();
const theories = require("../models/theories.js");

router.get("/", function(req, res){
    theories.all((data)=>{
        let hbsObj = {
            theories: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj)
        // res.send(data)
    });
});

router.post("/api/theories", function(req, res){
    console.log(req);
    theories.create([
        "media_name", "creator", "theory"
    ], [
        req.body.media_name, req.body.creator, req.body.theory
    ], (result)=>{
        console.log(result)
        //returns id of new post to be used in the id of the html
        res.json({id: result.id})
    })
});

router.put("/api/theories/:id", function(req, res){
    let condition = "id = " + req.params.id;
    console.log("condition", condition);
    theories.update(req.body, condition, (result)=>{
        if(result.changedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    })
});

router.delete("/api/theories/:id", function(req, res){
    let condition = "id = " + req.params.id;
    console.log(condition)
    theories.delete(condition, (result)=>{
        console.log(result)
        if(result.affectedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    })
})

//readName
module.exports = router;