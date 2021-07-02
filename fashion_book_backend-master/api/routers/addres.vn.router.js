'use strict'
const address_vn_controller = require('../controllers/address.vn.controller');
module.exports = (app) => {
    app.route('/address/city/all')
        .get(address_vn_controller.getAllCity);
    app.route('/address/city/district/:code')
        .get(address_vn_controller.getAllDistrict);
    app.route('/address/city/district/ward')
        .post(address_vn_controller.getAllWard);

}