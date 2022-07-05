const jwt = require('jsonwebtoken')

module.exports = auth =  (req, res, next) => {
       token = req.params.token

       if (!token) {
              return res.status(401).send('token not found')
       }
       try {
              const verifyUser = jwt.verify(token, process.env.JWT_SECRET)
              req.user = verifyUser
              next()
       } catch (error) {
              return res.status(401).send('acess denied').end()
       }
}