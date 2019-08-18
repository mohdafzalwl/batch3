const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('login.ejs');
});

router.get('/user', (req, res) => {
	res.send('welcome user ');
});

module.exports = router;
