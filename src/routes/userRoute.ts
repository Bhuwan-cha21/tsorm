const {addUser , findall ,getById,findOne} = require('../controller/userController')
const Router = require('express').Router()
Router.post('/adduser' ,addUser )
Router.get('/allusers',findall)
Router.get('/getbyid/:id',getById)
Router.get('/findone',findOne)



module.exports = Router