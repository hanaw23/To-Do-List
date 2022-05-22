const { Todos } = require("../models/");

class TodoProcess {
  static async postTodo(req, res) {
    const getBody = req.body;
    const getUserId = req.session.userId;
    console.log(getBody);

    try {
      await Todos.todo(getBody, getUserId);
      res.redirect("/todolist");
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }

  static async postDelete(req, res) {
    const getBody = req.body;
    const getUserId = req.session.userId;

    try {
      await Todos.deleteTodo(getBody, getUserId);
      res.redirect("/todolist");
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
}

module.exports = TodoProcess;
