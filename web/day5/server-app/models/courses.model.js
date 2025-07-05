const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const courseSchema=new Schema({
    id: String,
    title: String,
    rating: Number,
    likes: Number,
    imageUrl: String,
    description: String
});

module.exports=mongoose.model("courses",courseSchema);