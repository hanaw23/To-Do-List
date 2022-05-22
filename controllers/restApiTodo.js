const { Todos } = require("../models/");

class TodosApi {
  static async postTodoApi(req, res) {
    const getBody = req.body;
    const getUserId = req.body.UserId;

    try {
      await Todos.todo(getBody, getUserId);
      console.log(res);
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
module.exports = TodosApi;
