const express = require('express');
const router =express.Router();
const model =require('./model');
const bodyparser = require('body-parser');
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended:false}));


router.post("/events",async(req,res)=>{
    try{
        const data ={
            title:req.body.title,
            description:req.body.description,
            location:req.body.location,
            startTime:req.body.startTime,
            endTime:req.body.endTime
            }
        
            const eventdata = await model.create(data);

            res.status(201).json({
                status:"success",
                message:eventdata
            })
    }catch(e){
        res.status(400).json({
            status:"Failed",
            message:e.message
        })
    }
})

router.get("/events",async(req,res)=>{
    try{
            const eventdata = await model.find({});

            res.status(200).json({
                status:"success",
                message:eventdata
            })
    }catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})


router.get("/events/:id",async(req,res)=>{
    try{
            const eventdata = await model.find({_id:req.params.id});

            res.status(200).json({
                status:"success",
                message:eventdata
            })
    }catch(e){
        res.status(404).json({
            status:"Failed",
            message:"There is no event with that id"
        })
    }
})


router.delete("/events/:id",async(req,res)=>{
    try{
            const eventdata = await model.deleteOne({_id:req.params.id});

            res.status(204).json({
                status:"success",
                message:eventdata
            })
    }catch(e){
        res.status(204).json({
            status:"Failed",
            message:e.message
        })
    }
})


router.put("/events/:id",async(req,res)=>{
    try{
        if(req.body.title ==""){
            res.status(400).json({
                status:"Failed",
                message:"Validation error:title is required"
            })
        }
            const eventdata = await model.updateOne({_id:req.params.id},req.body);

            res.status(200).json({
                status:"success",
                message:eventdata
            })
    }catch(e){
        res.status(400).json({
            status:"Failed",
            message:e.message
        })
    }
})


module.exports =router;