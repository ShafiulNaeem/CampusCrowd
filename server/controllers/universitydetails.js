const UniversityDetail = require('../models/university_detail')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const token = require('jsonwebtoken')
const fs = require('fs');


exports.universitydetails = (req, res) => {
    var body = req.body
    User.find({email: body.email}, (err, user) => {
        if(err){
            return res.status(500).json({
                error: err,
                message: "NO user found"
            })
        }
        if(!user){
            return res.status(500).json({
                success: false,
                message: "NO user found"
            })
        }
        else {
            var uni = new UniversityDetail({
                uni_name: body.uni_name,
                uni_detail: body.uni_detail,
                uni_description: body.uni_description,
                uni_department: body.uni_department,
                uni_rank: body.uni_rank,
                uni_location: body.uni_location,
                created_by: body.created_by,
                created_at: body.created_at,
                updated_at: body.updated_at
            })
            uni.save()
            .then(user => {
                res.status(201).json({
                    success: true,
                    message: "Admin added successful",
                    user: user,
                })
            }).catch(err => {
                console.log(err);
                res.json({
                    success: false,
                    message: "Add Admin Post Failed",
                    message: err,
                })
            })
        }
    })
}

// get university details
exports.getuniversitydetails = (req, res)=>{
	UniversityDetail.find({}).then(result => {
		res.status(201).json({
			message: "university details Get Successful",
			data: result,
			count: result.length,
		})
	})
}