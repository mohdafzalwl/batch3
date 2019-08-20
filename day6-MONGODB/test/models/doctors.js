const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({

    name: "String",
    
})

const Doctors = new mongoose.model("Doctors", doctorSchema)

module.exports = Doctors;


// npm install express-generator 


// express name-of-your-app

// cd name-of-your-app

// npm install 

// npm start