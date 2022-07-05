const express = require('express');
const router = express.Router();
const admControl = require('../controller/adm')
const controler = require('../controller/login')
const templateControl = require('../controller/templateControl')
const auth = require('../controller/auth')
const cors = require('cors');
router.use(cors())

router.post('/record', express.urlencoded({ extended: true }), controler.register);
router.post('/login', express.urlencoded({ extended: true }), controler.login)

router.get('/', templateControl.indexRouter)
router.get('/login', templateControl.loginRouter)
router.get('/record', templateControl.recordRouter)
router.get('/user/:token', auth, templateControl.userRouter)
router.get('/admin/:token', auth, admControl.checkAdmin, templateControl.admRouter)

module.exports = router