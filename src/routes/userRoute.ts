const userController= require('../controller/userController')
const Router = require('express').Router()
Router.post('/adduser' ,userController.addUser )
Router.get('/allusers',userController.findall)
Router.get('/getbyid/:id',userController.getById)
Router.get('/findone',userController.findOne)



module.exports = Router