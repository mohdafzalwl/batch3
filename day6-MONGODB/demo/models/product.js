const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    produtName: String,
    price: Number
})

const PRODUCTS = mongoose.model('PRODUCTS', productSchema)

module.exports =PRODUCTS