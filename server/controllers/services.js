const ServicesDetailes = require('../models/services')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const token = require('jsonwebtoken')
const fs = require('fs');


exports.addservice = (req, res) => {
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
            var new_Services = new ServicesDetailes({
                service_tittle: body.service_tittle,
                service_description: body.service_description,
                image: body.image,
                // uni_department: body.uni_department,
                // uni_rank: body.uni_rank,
                // uni_location: body.uni_location,
                created_by: body.created_by,
                created_at: body.created_at,
                updated_at: body.updated_at
            })
            new_Services.save()
            .then(service => {
                res.status(201).json({
                    success: true,
                    message: "service added successful",
                    service: service,
                })
            }).catch(err => {
                console.log(err);
                res.json({
                    success: false,
                    message: "Add service Post Failed",
                    message: err,
                })
            })
        }
    })
}

// get all service details
exports.getAllServices = (req, res)=>{
	ServicesDetailes.find({}).then(result => {
		res.status(201).json({
			message: "university details Get Successful",
			data: result,
			count: result.length,
		})
	})
}

// get services by id details
exports.getServicesById = (req, res)=>{
	ServicesDetailes.findById(req.params.id).then(result => {
		res.status(201).json({
			message: "university details Get Successful",
			data: result,
			count: result.length,
		})
	})
}