import { Model } from "sequelize"

let sequelize = require('../database')
let Sequelized = require('sequelize')

class player extends Model{}
player.init({
    name :{
        field:'name',
        type: Sequelized.STRING
    },
    club:{
        field:'club',
        type: Sequelized.STRING
    },
    positon:{
        field:'positon',
        type:Sequelized.STRING
    },
    age:{
        field:'age',
        type:Sequelized.INTEGER
    },
    
},{
    timestamps:false,
    sequelize,
    modelName: 'player'
})
module.exports = player