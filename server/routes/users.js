const express = require('express')
const router = express.Router();
const UserController = require('../controllers/users');
const UniversityDetails = require('../controllers/universitydetails')
const FeaturesController = require('../controllers/features')
const FoodController = require('../controllers/food')
const ServiceController = require('../controllers/services')
const CourseController = require('../controllers/shortcourse')
const User = require('../models/user');
const Auth = require('../middleware/authMiddleware');
const multer = require ('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '.../static/uploads/profilepic');
    },
    filename: function (req, file, cb) {

        file.originalname = file.originalname.split(" ").join("_");
        cb(null, new Date().getTime() + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if ( file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage, limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: fileFilter
});





// create super admin
router.post('/adduser', UserController.adduser);

//show register user from admin part
router.get('/getalluser', UserController.getallUser)


router.post('/register', Auth, UserController.adduser);
router.post('/login', UserController.login)


// user profile update 
router.post('/updateprofile/:id', upload.single('image'), Auth, UserController.updateProfile)

// add university details route for user 
router.post('/adduniversity', UniversityDetails.universitydetails)
// add university details route for user 
router.get('/getuniversitydetails', UniversityDetails.getuniversitydetails)

// features add for user background api
router.post('/addfeatures', FeaturesController.addFeatures)
// all features get for user show
router.get('/getfeatures', FeaturesController.getAllFeatures)
// features get by id for user show
router.get('/getfeatures/:id', FeaturesController.getFeaturesById)

// service add for user background api
router.post('/addservice', ServiceController.addservice)
// all features get for user show
router.get('/getallservices', ServiceController.getAllServices)
// // features get by id for user show
// router.get('/getservices/:id', ServiceController.getServicesById)

// course add for user background api
router.post('/addcourse', CourseController.addcourse)
// all course get for user show
router.get('/getcourse', CourseController.getAllCourse)
// course get by id for user show
router.get('/getcourse/:id', CourseController.getCourseById)


//add food from admin 
router.post('/addfood', FoodController.addfood)
//get food from admin 
router.get('/getallfood', FoodController.getAllFood)





module.exports = router
