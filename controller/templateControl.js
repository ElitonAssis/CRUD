module.exports = {
    indexRouter: (req, res) => {
        res.render('index')
    },
    loginRouter: (req, res) => {
        res.render('login')
    },
    recordRouter: (req, res) => {
        res.render('record')
    },
    userRouter:(req,res)=>{
       res.render('user')    
    },
    admRouter:(req,res)=>{
        res.render('adm')
    }
}
