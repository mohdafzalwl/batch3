const express = require('express')
const router = express.Router()
const db = require('../models')
router.get('/', (req,res)=>{
    db.Users.find()
    // .then((data)=> res.json(data))
    .then((data)=> res.render('list' , {data:data}))
    .catch((err)=> res.send(err))
})
router.post('/',(req,res)=>{
    db.Users.create(req.body)
    .then(res.redirect('/users'))
    .catch((err)=> res.send(err))
})
//find by Id 
router.get('/:id', (req,res)=> {
  db.Users.findById(req.params.id)
    .then((data)=> res.render('showUser' , {data:data}))
    .catch((err)=>res.send(err))
})
//update 
router.put('/edit/:id' ,(req,res)=>{
    // console.log(req.params.id)
    console.log(req.body)
    db.Users.findByIdAndUpdate({_id:req.params.id} ,req.body)
    .then(res.redirect('/users'))
    .catch((err)=>res.send(err))
})
//get edit page
router.get('/edit/:id' , (req,res)=>{
    db.Users.findById({_id:req.params.id})
    .then((data)=> res.render('editUser', {data:data}))
    .catch((err)=> res.send(err))
})

//delete
router.delete('/delete/:id',(req,res)=>{
    db.Users.remove({_id: req.params.id})
    .then(res.redirect('/users'))
    .catch((err)=>res.send(err))
})

module.exports = router