"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Todos);
    }

    static #hashPassword(pass) {
      return bcrypt.hashSync(pass, 10);
    }

    static #comparePassword(pass, dbPass) {
      return bcrypt.compareSync(pass, dbPass);
    }

    static #generateToken(payload) {
      const secret = "My secret";
      return jwt.sign(payload, secret);
    }

    static async signUp(getBody) {
      const encrypt = this.#hashPassword(getBody.password);
      try {
        await this.create({
          username: getBody.username,
          email: getBody.email,
          password: encrypt,
        });
      } catch (error) {
        Promise.reject(error);
      }
    }

    static async signIn(getBody) {
      try {
        const query = {
          where: {
            username: getBody.username,
            email: getBody.email,
          },
        };

        let resultObj = {
          success: false,
          alert: "",
          token: "",
        };

        if (getBody.username === "" || getBody.password === "" || getBody.email === "") {
          resultObj.alert = "Please fill the form!";
        } else {
          let user = await this.findOne(query);

          if (!user) {
            resultObj.alert = "User not found!";
          } else {
            const userData = {
              id: user.dataValues.id,
              username: user.dataValues.username,
              email: user.dataValues.email,
            };

            let dbPassword = user.dataValues.password;
            let isPasswordValid = this.#comparePassword(getBody.password, dbPassword);

            if (!isPasswordValid) {
              resultObj.alert = "Invalid Password!";
            } else {
              resultObj.token = this.#generateToken(userData);
              resultObj.success = true;
              resultObj.data = userData;
            }
          }
        }
        return Promise.resolve(resultObj);
      } catch (error) {
        Promise.reject(error);
      }
    }

    static async changePass(getBody) {
      const encrypt = this.#hashPassword(getBody.password);

      try {
        const query = {
          where: { email: getBody.email },
        };
        const newData = {
          password: encrypt,
        };

        return await this.update(newData, query);
      } catch (error) {
        Promise.reject(error);
      }
    }
  }
  Users.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
