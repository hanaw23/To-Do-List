"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Todos.belongsTo(models.Users);
    }

    static async todo(getBody, getUserId) {
      try {
        return await this.create({
          todo: getBody.todo,
          UserId: getUserId,
        });
      } catch (error) {
        Promise.reject(error);
      }
    }

    static async deleteTodo(getBody, getUserId) {
      try {
        const query = {
          where: { todo: getBody.todo, UserId: getUserId },
        };
        return await this.destroy(query);
      } catch (error) {
        Promise.reject(error);
      }
    }
  }
  Todos.init(
    {
      todo: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Todos",
    }
  );
  return Todos;
};
