
require('dotenv').config();;
const express = require('express')
const app = express();
const router = require('./router/router')
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect(process.env.DB_ACESS).then(() => {
    console.log('Db USUARIOS')
}).catch((Error) => {
    console.log(Error)
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'))
app.use('/',router)


app.listen(process.env.PORT, () => {
    console.log('Server on AT door ' + process.env.PORT)
})
