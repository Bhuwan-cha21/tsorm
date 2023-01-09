const Router = require('express').Router()
const  playerController = require('../controller/playerController')

Router.post('/addplayer' ,playerController.addPlayer )
Router.get('/allplayers',playerController.findall)
Router.get('/getbyid/:id',playerController.getById)
Router.get('/findone',playerController.findOne)
Router.delete('/deleteone/:id',playerController.deleteOne)
Router.get('/playerofclub',playerController.playerOfClub)
module.exports = Router