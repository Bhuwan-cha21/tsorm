let playerModel = require('../model/player')
let clubModel = require('../model/club')
const factory = require('../factory')
exports.addPlayer =   factory.addOne(playerModel)
exports.findall =  factory.findall(playerModel)
exports.getById = factory.getById(playerModel)
exports.findOne  = factory.findOne(playerModel)
exports.deleteOne = factory.deleteOne(playerModel)
exports.playerOfClub = async (req,res ) =>{
  const data = await  playerModel.findAll({
        include: [{
            model: clubModel,
            required: true // inner join
          }]
    })
    res.send(data)
  console.log('here')
}