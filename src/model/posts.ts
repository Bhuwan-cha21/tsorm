import { Model } from "sequelize"

let sequelize = require('../database')
let Sequelized = require('sequelize')
const userModel = require('./user')

class post extends Model{}
post.init({
    name : Sequelized.STRING,
    title: Sequelized.STRING,
    content: Sequelized.STRING,
    userid : Sequelized.INTEGER
    
},{
    timestamps:false,
    sequelize,
    modelName: 'post',
    freezeTableName: true,
})
post.create({title:"first",content:'first',userid:1})
module.exports = post