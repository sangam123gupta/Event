const mongoose=require('mongoose');


/*
 "name": "8",
      "email": "00963",
      "address": "100888",
      "rating": null,
      "flag": 3,
      "selectedDate": "2021-11-10T18:30:00.000Z",
      "eventname": "Movie Ticket",
      "descrption": "asjdghsdcb skchscsc dsnjkdschdskcmdsdc dsldcukdscdcdccjchd",
      "Organiser": "Xicom",
      "id": 18
      */
const userSchema=mongoose.Schema({

    _id: mongoose.Types.ObjectId,

    name:String,

    email:String,

    rating:String,

    flag:String,

    selectedDate:String,

    eventname:String,

    descrption:String,

    Organiser:String

})

module.exports=mongoose.model('users',userSchema);