let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

// reference book Controller
let bookController = require('../controllers/book');

//helper function for gurad purposes
function requireAuth(req,res,next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Book List page - READ Operation */
router.get('/', bookController.displayBookList);

/*GET Route for the displaying Add page - CREATE Operation*/
router.get('/add', requireAuth, bookController.displayAddPage);

/*POST Route for the processing Add page - CREATE Operation*/
router.post('/add', requireAuth, bookController.processAddPage);

/*GET Route for the displaying Edit page - UPDATE Operation*/
router.get('/edit/:id', requireAuth, bookController.displayEditPage);

/*POST Route for the processing Edit page - UPDATE Operation*/
router.post('/edit/:id', requireAuth, bookController.processEditPage);

/*GET to perform Deletion - DELETE Operation*/
router.get('/delete/:id', requireAuth, bookController.performDelete);

module.exports = router;