'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const addressvn = new Schema({
    city: String,
    code: String,
    district: [
        {
            name: String,
            code: String,
            ward: [
                {
                    name: String,
                    code: String
                }
            ]
        }
    ]
})
module.exports = mongoose.model('addressvn', addressvn);