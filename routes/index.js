var express = require('express');
var router = express.Router();

//All Page Routes  

// Home page route
router.get('/', function(req, res, next) {
    res.render('home', { title: 'Home' });
});

// About Me page route
router.get('/about', function(req, res, next) {
    res.render('aboutMe', { title: 'About Me' });
});

// My Projects page route
router.get('/projects', function(req, res, next) {
    res.render('myProjects', { title: 'My Projects' });
});

// Contact Me page route
router.get('/contact', function(req, res, next) {
    res.render('contactMe', { title: 'Contact Me' });
});

module.exports = router;
