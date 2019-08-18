const express = require('express');

const router = express.Router();

const users = [];
var id = 1;

router.get('/users', (req, res) => {
	return res.json(users);
});

router.get('/users/:id', (req, res) => {
	const user = users.find((val) => val.id === Number(req.params.id));
	return res.json(user);
});

router.post('/users', (req, res) => {
	users.push({
		name: req.body.name,
		id: ++id
	});
	return res.json({ message: 'Created' });
});

router.patch('/users/:id', (req, res) => {
	const user = users.find((val) => val.id === Number(req.params.id));
	user.name = req.body.name;
	return res.json({ message: 'Updated' });
});

router.delete('/users/:id', (req, res) => {
	const userIndex = users.findIndex((val) => val.id === Number(req.params.id));
	users.splice(userIndex, 1);
	return res.json({ message: 'Deleted' });
});

// Now that we have built up all these routes - let's export this module for use in our app.js!
module.exports = router;
