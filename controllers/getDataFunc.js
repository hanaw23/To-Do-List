const { Todos } = require("../models/");

class GetData {
  static getHomePage(req, res) {
    res.render("index", { title: "Home Page" });
  }

  static getSignUpPage(req, res) {
    res.render("signUp", { title: "Sign Up Page", alert: "" });
  }

  static getSignInPage(req, res) {
    res.render("signIn", { title: "Sign In Page", alert: "" });
  }

  static getChangePasswordPage(req, res) {
    res.render("changePassword", { title: "Change Password Page", alert: "" });
  }

  static getToDoListPage(req, res) {
    const query = {
      where: { UserId: req.session.userId },
    };

    Todos.findAll(query)
      .then((result) => res.render("todoList", { data: result }))
      .catch((err) => res.status(500).json(err));
  }

  static getLogOut(req, res) {
    req.session.isLogin = false;
    req.session.userId = 0;
    res.redirect("/");
  }
}

module.exports = GetData;
