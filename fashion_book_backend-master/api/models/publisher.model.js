'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const publisher = new Schema({
    name: {
        type: String,
        required: [true, "can't be blank"],
    },
});
module.exports = mongoose.model('publisher', publisher);