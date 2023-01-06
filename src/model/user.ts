import { Model } from "sequelize"

let sequelize = require('../database')
let Sequelized = require('sequelize')


class User extends Model{}

User.init({
  
  firstName: {
    type: Sequelized.STRING,
    allowNull: false,
    get() {
          const rawValue = this.getDataValue('firstName');
        return rawValue ? rawValue.toUpperCase() : null;
    },
  },
  lastName: {
    type: Sequelized.STRING
  },
    email: {
    type: Sequelized.STRING,
    allowNull: false,
    unique:true
  },
  password:{
    type:Sequelized.STRING,
    allowNull:false,
    set(value) {
      this.setDataValue('password', `s${value}`);
    },
    validate: {
      len: [5, 10],
      
    }
    
  }
}, {
 
  sequelize, 
  modelName: 'User' // We need to choose the model name
});
User.sync()
module.exports = User