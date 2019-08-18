const express = require('express')
const router = express.Router()

const products = ["mobiles" , "toyes" , "phones"]

router.get('/', (req,res)=>{
res.render('products', {products:products} )
})

router.get('/add', (req,res)=>{
    res.render('addProducts')
    })
    

// /products
router.post('/', (req,res)=>{
    console.log(req.body)
    products.push(req.body.product)
    res.redirect('/products')
})

module.exports = router;