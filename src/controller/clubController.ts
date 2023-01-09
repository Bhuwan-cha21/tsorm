let clubModel = require('../model/club')
let playerModel = require('../model/player')
const factory = require('../factory')
let Sequelize = require('../database')
exports.addClub =   factory.addOne(clubModel)
exports.findall =  factory.findall(clubModel)
exports.getById = factory.getById(clubModel)
exports.findOne  = factory.findOne(clubModel)
exports.deleteOne = factory.deleteOne(clubModel)
exports.playerOfClub = async (req,res ) =>{
    const players = await clubModel.findAll({
      include : playerModel,
      where  : {club:'chelsea'}
    })
}