const FeaturesDetailes = require('../models/features')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const token = require('jsonwebtoken')
const fs = require('fs');


exports.addFeatures = (req, res) => {
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
            var new_feature = new FeaturesDetailes({
                feature_tittle: body.feature_tittle,
                feature_description: body.feature_description,
                image: body.image,
                // uni_department: body.uni_department,
                // uni_rank: body.uni_rank,
                // uni_location: body.uni_location,
                created_by: body.created_by,
                created_at: body.created_at,
                updated_at: body.updated_at
            })
            new_feature.save()
            .then(feature => {
                res.status(201).json({
                    success: true,
                    message: "feature added successful",
                    feature: feature,
                })
            }).catch(err => {
                console.log(err);
                res.json({
                    success: false,
                    message: "Add feature Post Failed",
                    message: err,
                })
            })
        }
    })
}

// get all features details
exports.getAllFeatures = (req, res)=>{
	FeaturesDetailes.find({}).then(result => {
		res.status(201).json({
			message: "university details Get Successful",
			data: result,
			count: result.length,
		})
	})
}

// get featured by id details
exports.getFeaturesById = (req, res)=>{
	FeaturesDetailes.findById(req.params.id).then(result => {
		res.status(201).json({
			message: "university details Get Successful",
			data: result,
			count: result.length,
		})
	})
}