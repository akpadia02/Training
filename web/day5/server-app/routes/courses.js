var express = require('express');
var router = express.Router();
const coursesModel=require("../models/courses.model");

/* GET home page. */
router.get('/', async function(req, res, next) {
    console.log("within courses");
    
 // res.render('index', { title: 'Express' });

 //to get data from mongodb and return back to client
//  res.send('Welcome to the courses  Server App');
    // coursesModel.find({}); //return a promise thats why aycn and await

    let courses=await coursesModel.find({}); //select * from courses;
    res.json(courses);

});

module.exports = router;