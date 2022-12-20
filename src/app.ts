import express from "express";
import "express-async-errors" 
import errorHandlingMiddleware from "./middlewares/errorHandling.middleware";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandlingMiddleware)


export default app;