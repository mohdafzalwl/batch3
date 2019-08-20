const express = require('express');
const router = express.Router();
//import the models
const db = require('../models/')


//list all users 
// router.get('/', (req,res)=>{
// 	db.USERS.find()
// 	.then((data)=> res.json(data))
// 	.catch((err)=> res.send(err))
// })

//render a user page
router.get('/', (req,res)=>{
	db.USERS.find()
.then((data)=>  res.render('user.ejs',{data:data}))
	.catch((err)=> res.send(err))
})

router.post('/',(req,res)=> {
	db.USERS.create(req.body)
	.then(()=>res.redirect('/users'))
	.catch((err)=> res.send(err))
})

// router.get('/:id',(req,res)=>{
// 	// console.log(req.params.userid)
// 	db.USERS.findById({_id:req.params.id})
// 	.then((data)=>res.json(data))
// 	.catch((err)=> res.send(err))
// })
router.get('/:id',(req,res)=>{
	// console.log(req.params.userid)
	db.USERS.findById({_id:req.params.id})
	.then((data)=>res.render('showuser.ejs',{data:data}))
	.catch((err)=> res.send(err))
})

//edit form page
router.get('/edit/:id',(req,res)=>{
	db.USERS.findById({_id: req.params.id})
	.then((data)=> res.render('edituser.ejs',{data:data}))
	.catch((err)=> res.send(err))
})


//users/update/413412341234
router.put('/update/:id',(req,res)=>{
	db.USERS.findOneAndUpdate({_id:req.params.id},req.body)
	.then(()=>res.redirect('/users'))
	.catch((err)=> res.send(err))
})

//users/delete/123412341234123
router.delete('/delete/:id',(req,res)=>{
	db.USERS.findOneAndDelete({_id:req.params.id})
	.then(res.redirect('/users'))
	.catch((err)=> res.send(err))
})


module.exports = router;
