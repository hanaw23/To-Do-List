const { Users } = require("../models");

class UsersAPI {
  static async postSignUpApi(req, res) {
    const getBody = req.body;

    try {
      await Users.signUp(getBody);
      res.status(201).json({
        message: "SUCCES",
      });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
}

module.exports = UsersAPI;
