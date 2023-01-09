const Router = require('express').Router()
const  clubController = require('../controller/clubController')

Router.post('/addclub' ,clubController.addClub )
Router.get('/allclubs',clubController.findall)
Router.get('/getbyid/:id',clubController.getById)
Router.get('/findone',clubController.findOne)
Router.delete('/deleteone/:id',clubController.deleteOne)
Router.get('/playerofclub',clubController.playerOfClub)

module.exports = Router