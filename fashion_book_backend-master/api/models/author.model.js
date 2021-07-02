'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const author = new Schema({
    name: {
        type: String,
        required: [true, "can't be blank"],
    },
});
module.exports = mongoose.model('author', author);