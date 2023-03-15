'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: 'Title is required'
         },
         notNull: {
            msg: 'Title is required'
         }
      }
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: 'Start date is required'
         },
         notNull: {
            msg: 'Start date is required'
         },
         dateFormat() {
            
         }
      }
    },
    end: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    PriorityId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};