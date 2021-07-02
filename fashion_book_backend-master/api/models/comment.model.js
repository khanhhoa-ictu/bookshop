'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comment = new Schema ({
    id_user: {
        type: String,
        default: 'no_user'
    },
    id_book: {
        type: String,
        required: [true, "can't be blank"]
    },
    name: {
        type: String,
        required: [true, "can't be blank"]
    },
    comment: {
        type: String
    },
    date: {
        type: Date,
        default: new Date()
    }
});
module.exports = mongoose.model('comment', comment);