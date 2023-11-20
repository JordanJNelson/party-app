'use strict';
const bcrypt = require('bcryptjs'); 
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class party extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  party.init({
    partyLocation: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1,99],
          msg: "Party location must be between 1 and 99 characters"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'party',
  });

  // return an object from the database of the user without the encrypted password
  // user.prototype.toJSON = function() {
  //   let userData = this.get(); 
  //   delete userData.password; // it doesn't delete password from database, only removes it. 
    
  //   return userData;
  // }

  return party;
};