const express=require('express');

const app=express();

const mongoose=require('mongoose');

const bodyParser=require('body-parser');

const jsonParser=bodyParser.json();

const user=require('./users');

mongoose.connect('mongodb+srv://Ironman:OrgoSxAUlgqz0o2H@cluster0.7n7uo.mongodb.net/sangammyFirstDatabase?retryWrites=true&w=majority',{

useNewUrlParser:true,
useUnifiedTopology:true

}).then((result)=>{
    console.log("mongodb is connected");
})
.catch((err)=>{
    console.log("mongodb is not connected");
})

app.post('/create',jsonParser,function(req,res){
  

    const data=new user({
    


    _id: mongoose.Types.ObjectId(),

    name:req.body.name,

    email:req.body.email,

    address:req.body.rating,

    flag:req.body.flag,

    selectedDate:req.body.selectedDate,

    eventname:req.body.eventname,

    descrption:req.body.descrption,

    Organiser:req.body.Organiser,


    })

    data.save().then((result)=>{

        console.log("data is saved")
    })
    .catch((err)=>{
        console.log("data is not saved")
    })
       
    
   
})





//////////////////


//http://localhost:3005/insert

app.post('/insert',jsonParser,function(req,res){
  

    const data=new user({
    


    _id: mongoose.Types.ObjectId(),

    name:req.body.name,

    email:req.body.email,

    address:req.body.rating,

    

    })

    data.save().then((result)=>{

        console.log("data is saved")
    })
    .catch((err)=>{
        console.log("data is not saved")
    })
       


/////   Get

app.get('/data/:id',function(req,res){
    
    user.findOne({_id:req.params.id}).then((data)=>{

        res.json(data)
    })
})


app.delete('/delete/:id',function(req,res){

    user.deleteOne({_id:req.params.id}).
    then((result)=>{

        res.status(201).json(result)
    })
    .catch((err)=>{
        console.warn(err)
    })

})



////////////                 update         //////

app.put('/update/:id',jsonParser,function(req,res){
    user.updateOne({_id:req.params.id},{$set:{
        name:req.body.name,
        email:req.body.email,
        address:req.body.address
    }}).then((result)=>{
        res.status(200).json(result)
    })

    .catch((err)=>{console.warn(err)})
})





app.listen(3005)