const {addPlayer } = require('../controller/playerController')
const Router = require('express').Router()
Router.post('/addplayer' ,addPlayer )

module.exports = Router