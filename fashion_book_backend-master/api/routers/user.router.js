'use strict'
const user_controller = require('../controllers/user.controller');
const auth = require('../utils/auth');
module.exports = (app) => {
    app.route('/user/register')
    .post(user_controller.register);

    app.route('/user/verify/:token')
    .get(user_controller.verifyAccount);

    app.route('/user/login')
    .post(user_controller.login);

    app.route('/user/request/forgotpassword/:email')
    .get(user_controller.requestForgotPassword)

    app.route('/user/verify/forgotpassword')
    .post(user_controller.verifyForgotPassword)

    app.route('/user/forgotpassword')
    .post(user_controller.forgotPassword)

    app.route('/auth')
    .post(auth.verify)

    app.route('/user/updateinfor')
    .post(user_controller.updateInfor)

    app.route('/user/updatepassword')
    .post(user_controller.updatePassword)
}