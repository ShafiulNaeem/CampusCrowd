const FeaturesDetailes = require('../models/features')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const token = require('jsonwebtoken')
const fs = require('fs');


exports.addFeatures = (req, res) => {
    var body = req.body
    User.find({ email: body.email }, (err, user) => {
        if (err) {
            return res.status(500).json({
                error: err,
                message: "Error occured!!"
            })
        }
        if (!user) {
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
exports.getAllFeatures = (req, res) => {
    FeaturesDetailes.find({}).then(result => {
        res.status(201).json({
            message: "university details Get Successful",
            data: result,
            count: result.length,
        })
    })
}

// get featured by id details
exports.getFeaturesById = (req, res) => {
    FeaturesDetailes.findById(req.params.id).then(result => {
        res.status(201).json({
            message: "university details Get Successful",
            data: result,
            count: result.length,
        })
    })
}



//update features from admin

exports.updateFeature = (req, res) => {
    var body = req.body
    bcrypt.hash(body.password, 10, (err, hash) => {
        FeaturesDetailes.findById(req.id, { password: 0 }, (err, newFeatures) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    error: err,
                    success: false
                })
            } else {
                var newFeatures = new FeaturesDetailes({
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
                FeaturesDetailes.findByIdAndUpdate(req.params.id, {
                    feature_tittle: body.feature_tittle,
                    feature_description: body.feature_description,
                    image: body.image,
                    // uni_department: body.uni_department,
                    // uni_rank: body.uni_rank,
                    // uni_location: body.uni_location,
                    created_by: body.created_by,
                    created_at: body.created_at,
                    updated_at: body.updated_at
                }, newFeatures, (err, newFeatures) => {
                    if (err) return res.status(500).send("There is problem fo getting")
                    else return res.status(200).json({ newFeatures: newFeatures })
                })
            }
        })
    });
}




// delete features from admin

exports.deleteFeature = (req,res) => {
    FeaturesDetailes.findById(req.params.id, {password: 0}, (err,user) => {
      if (err) return res.status(500).send("There was a problem finding the features.");
      if (!user) return res.status(404).send("No user found.");
      else{
        FeaturesDetailes.findByIdAndRemove(req.params.id, (err,feature) => {
          if(err) return res.status(500).send("There is problem fo getting")
          else return res.status(200).json({feature: feature})
        })
      }
    })
  }