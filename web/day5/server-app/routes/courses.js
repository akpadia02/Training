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
// GET course by custom "id" (not MongoDB _id)
router.get('/:id', async function(req, res) {
    try {
        const courseId = req.params.id;
        const course = await coursesModel.findOne({ id: courseId }); // match custom "id"
        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch course" });
    }
});


// DELETE /courses/:id
router.delete('/:id', async function (req, res) {
    try {
        const courseId = req.params.id;
        await coursesModel.findByIdAndDelete(courseId);
        res.status(200).json({ message: "Course deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete course." });
    }
});

router.post('/', async function(req, res) {
    try {
        const newCourse = new coursesModel(req.body);
        await newCourse.save();
        res.status(201).json({ message: "Course added successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to add course" });
    }
});


// PUT /courses/:id → update course with custom "id"
router.put('/:id', async function (req, res) {
    try {
        const courseId = req.params.id;
        const updatedCourse = await coursesModel.findOneAndUpdate(
            { id: courseId },
            req.body,
            { new: true }
        );
        if (!updatedCourse) {
            return res.status(404).json({ error: "Course not found" });
        }
        res.status(200).json({ message: "Course updated successfully", updatedCourse });
    } catch (err) {
        res.status(500).json({ error: "Failed to update course" });
    }
});


module.exports = router;