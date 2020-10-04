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



//update service from admin

exports.updateService = (req, res) => {
    var body = req.body
    bcrypt.hash(body.password, 10, (err, hash) => {
        ServicesDetailes.findById(req.id, { password: 0 }, (err, newService) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    error: err,
                    success: false
                })
            } else {
                var newService = new ServicesDetailes({
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
                ServicesDetailes.findByIdAndUpdate(req.params.id, {
                    service_tittle: body.service_tittle,
                    service_description: body.service_description,
                    image: body.image,
                    // uni_department: body.uni_department,
                    // uni_rank: body.uni_rank,
                    // uni_location: body.uni_location,
                    created_by: body.created_by,
                    created_at: body.created_at,
                    updated_at: body.updated_at
                }, newService, (err, newService) => {
                    if (err) return res.status(500).send("There is problem fo getting")
                    else return res.status(200).json({ newService: newService })
                })
            }
        })
    });
}




// delete service from admin

exports.deleteService = (req,res) => {
    ServicesDetailes.findById(req.params.id, {password: 0}, (err,user) => {
      if (err) return res.status(500).send("There was a problem finding the features.");
      if (!user) return res.status(404).send("No user found.");
      else{
        ServicesDetailes.findByIdAndRemove(req.params.id, (err,service) => {
          if(err) return res.status(500).send("There is problem fo getting")
          else return res.status(200).json({service: service})
        })
      }
    })
  }