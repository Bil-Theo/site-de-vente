const express = require('express')
const route = express.Router()
const Control =  require('../controleurs/user')

route.post('/signup', Control.signup);
route.post('/login', Control.login)

module.exports = route;