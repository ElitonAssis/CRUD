const express = require('express')
const app = express()
const adm = require('../models/schemaProduct')


module.exports = {
    checkAdmin : (req, res, next) => {
        if (!req.user.admin) {
            return res.send('acess denied').end()
        }
        next()
    }
    ,
    add: async (req, res) => {
        const product = new adm({
            name : req.body.name,
            image : req.body.image
        })
        try {
            const newProduct = await product.save()
            res.send('add with sucess')
        } catch (error) {
            console.log(error)
        }
    }
    ,
}

// estudar

