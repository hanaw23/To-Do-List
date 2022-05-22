const express = require("express");
const renderRouter = express.Router();

const author = require("../middleware/authorization");
const getData = require("../controllers/getDataFunc");
const apiData = require("../controllers/restApiUsers");
const apiTodoData = require("../controllers/restApiTodo");
const TodosProcess = require("../controllers/todosFunc");
const UsersProcess = require("../controllers/usersFunc");

renderRouter.get("/", getData.getHomePage);

renderRouter.route("/signUp").get(getData.getSignUpPage).post(UsersProcess.postSignUp);

renderRouter.route("/signIn").get(getData.getSignInPage).post(UsersProcess.postSignIn);

renderRouter.route("/changePassword").get(getData.getChangePasswordPage).post(UsersProcess.postChangePassword);

renderRouter.use(author);

renderRouter.route("/todolist").get(getData.getToDoListPage).post(TodosProcess.postTodo);

renderRouter.post("/todolist/delete", TodosProcess.postDelete);

renderRouter.post("/logOut", getData.getLogOut);

//* REST API
renderRouter.post("/api/signUp", apiData.postSignUpApi);
renderRouter.post("/api/todolist", apiTodoData.postTodoApi);

module.exports = renderRouter;
