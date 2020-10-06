const jwt = require('jsonwebtoken');
const User = require('../models/user')

module.exports = (req,res,next) => {
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, "ajlkhfkuthernqlfkvieo213109284312094j12!3240214");
        req.userdata = decoded;
        // next();
    } catch (error) {
        return res.status(404).json({
            message: "Auth Failed",
            success:false,
        })
	}
	user = req.userdata;
	User.findById(user.id, (err, res)=>{
	    if( res.role == 1 ){
			console.log("Yes Super Admin")
			next()
		}
		else if( res.role == 2 ){
			console.log("Yes Admin")
			if(res.role > req.body.role){
				return console.log('failed')
			}
			next()
		}
		else if( res.role == 3 ){
			console.log("Yes Reseller Admin")
			if(res.role > req.body.role){
				return console.log('failed')
			}
			next()
		}
		else if( res.role == 4 ){
			console.log("Yes User")
			if(res.role > req.body.role){
				return console.log('failed')
			}
			next()
		}
	});
} 