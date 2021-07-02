'use strict'
const jwt = require('jsonwebtoken');
exports.verify = async(req, res) => {
    if(typeof req.body.token === 'undefined'
        ||typeof req.body.email === 'undefined'){
        res.status(422).json({msg: "Invalid data"});
        return;
    }

    let token = req.body.token;
    let email = req.body.email;
    try{
        let decoded = await jwt.verify(token, 'shhhhh')
        if(decoded.email == email){
            res.status(200).json({msg: 'success'});
            return;
        }
        res
    }
    catch(err){
        res.status(404).json({msg: 'unsuccess'});
        return
    }
    res.status(404).json({msg: 'unsuccess'});
}