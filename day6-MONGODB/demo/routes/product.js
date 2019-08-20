const express = require('express')
const router = express.Router()
const db = require('../models')


//get all products 
router.get('/', (req,res)=> {
    db.PRODUCTS.find()
    .then((data)=> res.json(data))
    .catch((err)=> res.send(err))
})

//create a product
router.post('/', (req,res)=> {
    console.log(req.body)
    db.PRODUCTS.create(req.body)
    .then((data)=> res.json(data))
    .catch((err)=> res.send(err))
})

module.exports = router