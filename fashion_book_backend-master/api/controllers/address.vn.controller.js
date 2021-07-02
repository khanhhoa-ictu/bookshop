'use strict'
const address = require('../models/address.vn.model');
exports.getAllCity = async (req, res) => {
    address.find({}, (err, docs) => {
        if(err){
            res.status(500).json({msg: err});
            return;
        }
        let data = [];
        for(let i = 0; i < docs.length; i++) {
            data.push({name: docs[i].city, code: docs[i].code})
        }
        res.status(200).json({data: data})
    })
}
exports.getAllDistrict = async (req, res) => {
    address.findOne({code: req.params.code}, (err, docs) => {
        if(err){
            res.status(500).json({msg: err});
            return;
        }
        let data = [];
        for(let i = 0; i < docs.district.length; i++) {
            data.push({name: docs.district[i].name, code: docs.district[i].code})
        }
        res.status(200).json({data: data})
    })
}
exports.getAllWard = async (req, res) => {
    address.findOne({code: req.body.codecity}, (err, docs) => {
        if(err){
            res.status(500).json({msg: err});
            return;
        }
        let data = [];
        for(let i = 0; i < docs.district.length; i++) {
            if(req.body.codedistrict === docs.district[i].code) {
                    res.status(200).json({data: docs.district[i].ward})
                    return;
                }
            }
        })
}