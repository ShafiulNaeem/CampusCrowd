const FoodDetailes = require('../models/food')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const token = require('jsonwebtoken')
const fs = require('fs');


exports.addfood = (req, res) => {
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
            var new_food = new FoodDetailes({
                food_tittle: body.food_tittle,
                food_description: body.food_description,
                image: body.image,
                // uni_department: body.uni_department,
                // uni_rank: body.uni_rank,
                // uni_location: body.uni_location,
                created_by: body.created_by,
                created_at: body.created_at,
                updated_at: body.updated_at
            })
            new_food.save()
            .then(food => {
                res.status(201).json({
                    success: true,
                    message: "food added successful",
                    food: food,
                })
            }).catch(err => {
                console.log(err);
                res.json({
                    success: false,
                    message: "Add food Post Failed",
                    message: err,
                })
            })
        }
    })
}

// get all food details
exports.getAllFood = (req, res)=>{
	FoodDetailes.find({}).then(result => {
		res.status(201).json({
			message: "Food details Get Successful",
			data: result,
			count: result.length,
		})
	})
}

// get food by id details
exports.getFoodById = (req, res)=>{
	FoodDetailes.findById(req.params.id).then(result => {
		res.status(201).json({
			message: "food details Get Successful",
			data: result,
			count: result.length,
		})
	})
}


//update features from admin

exports.updateFood = (req, res) => {
    var body = req.body
    bcrypt.hash(body.password, 10, (err, hash) => {
        FoodDetailes.findById(req.id, { password: 0 }, (err, newFood) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    error: err,
                    success: false
                })
            } else {
                var newFood = new FoodDetailes({
                    food_tittle: body.food_tittle,
                    food_description: body.food_description,
                    image: body.image,
                    // uni_department: body.uni_department,
                    // uni_rank: body.uni_rank,
                    // uni_location: body.uni_location,
                    created_by: body.created_by,
                    created_at: body.created_at,
                    updated_at: body.updated_at
                })
                FoodDetailes.findByIdAndUpdate(req.params.id, {
                    food_tittle: body.food_tittle,
                    food_description: body.food_description,
                    image: body.image,
                    // uni_department: body.uni_department,
                    // uni_rank: body.uni_rank,
                    // uni_location: body.uni_location,
                    created_by: body.created_by,
                    created_at: body.created_at,
                    updated_at: body.updated_at
                }, newFood, (err, newFood) => {
                    if (err) return res.status(500).send("There is problem fo getting")
                    else return res.status(200).json({ newFood: newFood })
                })
            }
        })
    });
}




// delete features from admin

exports.deleteFood = (req,res) => {
    FoodDetailes.findById(req.params.id, {password: 0}, (err,user) => {
      if (err) return res.status(500).send("There was a problem finding the features.");
      if (!user) return res.status(404).send("No user found.");
      else{
        FoodDetailes.findByIdAndRemove(req.params.id, (err,food) => {
          if(err) return res.status(500).send("There is problem fo getting")
          else return res.status(200).json({food: food})
        })
      }
    })
  }