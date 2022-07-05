const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    Image : String
})

module.exports =  mongoose.model('Product',productSchema)