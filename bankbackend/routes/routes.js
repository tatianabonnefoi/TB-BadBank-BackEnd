const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const signUpTemplateCopy = require('../models/SignUpModels')
const mytable = require('../models/SignUpModels')

router.post('/signup', (request, response) =>{
    const signedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,
        balance:request.body.balance
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

router.get('/:email', (request, response) =>{
        mytable.findOne({ email: {$regex: request.params.email}})
        .exec()
        .then(doc => {
            console.log(doc);
            response.status(200).json(doc);
        })
    .catch(error => {
        console.log(error)
        response.json(error)
    })
})


module.exports = router