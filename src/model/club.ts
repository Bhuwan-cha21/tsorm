import { Model } from "sequelize"

let sequelize = require('../database')
let Sequelized = require('sequelize')
const playerModel = require('./player')

class club extends Model{}
club.init({
    name :{
        field:'name',
        type: Sequelized.STRING
    },
    country:{
        field:'country',
        type: Sequelized.STRING
    },
    division:{
        field:'division',
        type:Sequelized.STRING
    },
    
},{
    timestamps:false,
    sequelize,
    modelName: 'club'
})

