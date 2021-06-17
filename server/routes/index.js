let express = require('express');
let router = express.Router();

//reference
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);


/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProductsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/*GET Route for the displaying Login page*/
router.get('/login', indexController.displayLoginPage);

/*POST Route for the processing Login page*/
router.post('/login',indexController.processLoginPage);

/*GET Route for the displaying Register page*/
router.get('/register', indexController.displayRegisterPage);

/*POST Route for the processing Register page*/
router.post('/register',indexController.processRegisterPage);

/*GET to perform UserLogout - DELETE Operation*/
router.get('/logout',indexController.performLogout);


module.exports = router;
