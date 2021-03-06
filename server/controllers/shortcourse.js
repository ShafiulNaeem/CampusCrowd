const ShortCourse = require('../models/shortcourse')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const token = require('jsonwebtoken')
const fs = require('fs');


exports.addcourse = (req, res) => {
    var body = req.body
    User.find({email: body.email}, (err, user) => {
        if(err){
            return res.status(500).json({
                error: err,
                message: "Error occured!!"
            })
        }
        if(!user){
            return res.status(500).json({
                success: false,
                message: "NO user found"
            })
        }
        else {
            var new_Course = new ShortCourse({
                course_tittle: body.course_tittle,
                course_description: body.course_description,
                // image: image,
                // uni_department: body.uni_department,
                // uni_rank: body.uni_rank,
                // uni_location: body.uni_location,
                created_by: body.created_by,
                created_at: body.created_at,
                updated_at: body.updated_at
            })
            new_Course.save()
            .then(course => {
                res.status(201).json({
                    success: true,
                    message: "course added successful",
                    course: course,
                })
            }).catch(err => {
                console.log(err);
                res.json({
                    success: false,
                    message: "Add course Post Failed",
                    message: err,
                })
            })
        }
    })
}

// get all course details
exports.getAllCourse = (req, res)=>{
	ShortCourse.find({}).then(result => {
		res.status(201).json({
			message: "university details Get Successful",
			data: result,
			count: result.length,
		})
	})
}

// get course by id details
exports.getCourseById = (req, res)=>{
	ShortCourse.findById(req.params.id).then(result => {
		res.status(201).json({
			message: "university details Get Successful",
			data: result,
			count: result.length,
		})
	})
}