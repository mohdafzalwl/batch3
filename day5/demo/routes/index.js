//import the module express
const express = require('express');
const router = express;

const friends = [ 'tom', 'plant', 'smacky' ];
//define the routes
router.get('/', (req, res) => {
	res.render('index.ejs', { friends: friends });
});

router.post('/', (req, res) => {
	friends.push(req.body.name);
	res.redirect('/');
});

//export module router
module.exports = router;
