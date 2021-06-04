var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home'});
});

/* GET home page. */
router.get('home', function(req, res, next) {
  res.render('home', { title: 'Home', page: 'home'});
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('aboutMe', { title: 'About', page: 'about'});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', page: 'projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services', page:'services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', page: 'contact'});
});

module.exports = router;
