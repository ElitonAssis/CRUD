const User = require('../models/schema');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const auth = require('./auth')

module.exports = {
    register: async (req, res) => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, saltRounds)
        })
        const checkUser = await User.findOne({
            email: req.body.email
        })
        if (checkUser) {
            return res.status(401).send('email already registered  passo 1')
        }
        try {
            await user.save()
            res.redirect('/')
        } catch (error) {
            return res.status(401).send('erro ao salvar')
        }
    },
    login: async (req, res, next) => {
        const checkUser = await User.findOne({
            email: req.body.email
        })
        if (!checkUser) {
            return res.status(401).send('email not found')
        }
        const compareKey = bcrypt.compareSync(req.body.password, checkUser.password)
        if (!compareKey) {
            return res.status(401).send('incorrect email or password')
        }
        const token = jwt.sign({
            _id: compareKey._id,
            admin: checkUser.admin
        }, process.env.JWT_SECRET, {
            expiresIn: 60
        })
        if (checkUser.admin) {
            res.redirect(`/admin/${token}`)
        } else {
            res.redirect(`/user/${token}`)
        }
    }
}