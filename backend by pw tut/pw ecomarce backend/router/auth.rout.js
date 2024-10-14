
const authcontroller = require('../controller/auth.controller')
const remv = require("../middleware/auth.midware")

module.exports = (app)=>{
    app.post('/ecom_db/auth/signup',[remv.verifysignupbody],authcontroller.signup)

    app.post('/ecom_db/auth/signin',authcontroller.signin)
}

