const User = require('../models/user')
const bcrypt = require('bcrypt')
const token = require('jsonwebtoken')
const fs = require('fs');

exports.adduser = (req, res) => {
    // req.checkBody('email', 'Password should be at least 6 characters long').trim().isEmail();
    // req.checkBody('password', 'Password should be at least 6 characters long').trim().isLength({ min: 6 });

	var body = req.body
	bcrypt.hash(req.body.password, 10, (err, hash) => {
		if (err) {
			return res.status(500).json({
				error: err,
				message: "Password couldn't be saved"
			})
		} else {
			var user = new User({
				email: body.email,
				password: hash,
				role: body.role
			})
			user.save()
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
                    message: "Please Check Data Again",
                    message: err,
                })
            })
		}
	})
}

exports.getallUser = (req, res)=>{
	User.find({}).then(result => {
		res.status(201).json({
			message: "Allergies Get Successful",
			data: result,
			count: result.length,
		})
	})
}

exports.login = (req, res) => {
    // req.checkBody('email', 'Password should be at least 6 characters long').trim().isEmail();
    // req.checkBody('password', 'Password should be at least 6 characters long').trim().isLength({ min: 6 });

	User.findOne({email: req.body.email}).then(user => {
		console.log(user, 'user form contr')
            if (!user) {
                return res.json({
                    message: "Auth Failed",
                    success: false,
                })
            } else {
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if (err) {
                        return res.json({
                            message: "Auth Failed",
                            success: false,
                        })
                    }
                    if (result) {
                        const jwtTkoen = token.sign({
                            email: user.email,
                            id: user.id,
                        }, "ajlkhfkuthernqlfkvieo213109284312094j12!3240214", {
                                expiresIn: "30d",
                            })
                        return res.status(200).json({
                            message: "Auth Successful",
                            token: jwtTkoen,
                            user: user,
                        })
                    }
                    return res.json({
                        message: "Auth Failed",
                        success: false,
                    })
                })
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: "Login Failed",
                message: err,
            })
        })
}


// admin own registration 
exports.addAdmin = (req,res) => {
    // req.checkBody('email', 'Password should be at least 6 characters long').trim().isEmail();
    // req.checkBody('password', 'Password should be at least 6 characters long').trim().isLength({ min: 6 });
    

    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.json({
                error: err,
                message: "Password couldn't be saved"
            })
        } else {
            User.create({
                email: req.body.email,
                password: hash,
                role: req.body.role,
            }).then(user => {
                res.status(201).json({
                    success: true,
                    message: "Add Admin Post Successful",
                    // id: user.id,
                    user: user
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
    });
}


//super admin update admin

exports.updateAdmin = (req,res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        User.findById(req.id, {password: 0}, (err,user) => {
            if(err){
                console.log(err)
                res.status(500).json({
                    error: err,
                    success: false
                })
            } else {
                var user = new User({
                    email: req.body.email,
                    password: hash,
                    user_first_name: req.body.user_first_name,
                    user_last_name: req.body.user_last_name,
                    user_gender: req.body.user_gender,
                    user_semister: req.body.user_semister,
                    user_department: req.body.user_department,
                    // image: image,
                    user_birth: req.body.user_birth,
                    user_address: req.body.user_address,
                    user_contract: req.body.user_contract,
                    status: req.body.status,
                    created_by: req.body.created_by,
                    updated_at: req.body.created_by
                })
                User.findByIdAndUpdate(req.params.id, {
                    email: req.body.email,
                    password: hash,
                    user_first_name: req.body.user_first_name,
                    user_last_name: req.body.user_last_name,
                    user_gender: req.body.user_gender,
                    user_semister: req.body.user_semister,
                    user_department: req.body.user_department,
                    // image: image,
                    user_birth: req.body.user_birth,
                    user_address: req.body.user_address,
                    user_contract: req.body.user_contract,
                    status: req.body.status,
                    created_by: req.body.created_by,
                    updated_at: req.body.created_by
                }, user, (err,user) => {
                    if(err) return res.status(500).send("There is problem fo getting")
                    else return res.status(200).json({user: user})
                })
            }
        })
    });
  }


// super admin delete admin

  exports.deleteAdmin = (req,res) => {
    User.findById(req.params.id, {password: 0}, (err,user) => {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      else{
        User.findByIdAndRemove(req.params.id, (err,user) => {
          if(err) return res.status(500).send("There is problem fo getting")
          else return res.status(200).json({user: user})
        })
      }
    })
  }
  



  // all user update profile 

  exports.updateProfile = (req,res) => {
    // req.checkBody('first_name', 'Please Fill Up First Name').trim().notEmpty();
    // req.checkBody('last_name', 'Please Fill Up Last Name').trim().notEmpty();
    // req.checkBody('contact', 'Please Fill Up Contact Number').trim().notEmpty();
    // req.checkBody('unit_apartment', 'Please Fill Up Apartment or Unit Number').trim().notEmpty();
    // req.checkBody('street_address', 'Please Fill Up Street Address').trim().notEmpty();
    // req.checkBody('suburb', 'Please Fill Up Suburb').trim().notEmpty();
    // req.checkBody('city', 'Please Fill Up City').trim().notEmpty();

      var body = req.body
      bcrypt.hash(req.body.password, 10, (err,hash) => {
            User.findById(req.params.id, (err, user) => {
                if(err){
                    // if (req.file) {
                    //     fs.unlink(req.file.path, (err) => {
                    //         if (err) console.log(err);
                    //         console.log(req.file.path + ' was deleted');
                    //     });
                    // }
                    return res.status(500).json({
                        error: err,
                        success: false
                    })
                }
                if(!user){
                return res.status(500).json({
                    message: "NO user found",
                    success: false
                    })
                } 
                else {
                    // let image = "";
                    // if(req.file){
                    //     image = req.file.path
                    // }
                    var user = new User({
                        email: body.email,
                        password: hash,    
                        user_first_name: body.user_first_name,
                        user_last_name: body.user_last_name,
                        user_gender: body.user_gender,
                        user_semister: body.user_semister,
                        user_department: body.user_department,
                        image: image,
                        user_birth: body.user_birth,
                        user_address: body.user_address,
                        user_contract: body.user_contract,
                        status: body.status,
                        created_by: body.created_by
                    })
                    User.findByIdAndUpdate(req.params.id, {
                        email: body.email,
                        password: hash,    
                        user_first_name: body.user_first_name,
                        user_last_name: body.user_last_name,
                        user_gender: body.user_gender,
                        user_semister: body.user_semister,
                        user_department: body.user_department,
                        image: image,
                        user_birth: body.user_birth,
                        user_address: body.user_address,
                        user_contract: body.user_contract,
                        status: body.status,
                        created_by: body.created_by
                    }, user, (err,user) => {
                        if(err){
                            return res.status(500).json({
                                error: err,
                                success: false
                            })
                        } else {
                            return res.status(200).json({
                                message: "Update Profile successful",
                                success: true,
                                data: user
                            })
                        }
                    })
                }
            })
      })
  }