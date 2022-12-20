import { Router } from "express";
import userCreateController from "./controllers/user/userCreate.controller";
import userListController from "./controllers/user/userList.controller";
import ErrorHTTP from "./errors/ErrorHTTP";

const routes = Router();

routes.post("/users", userCreateController);
routes.get("/users", userListController);

routes.get("/error", async (req, res) => {
  throw new ErrorHTTP("Debug error route",500)
})

export default routes;
