import { AppDataSource } from "./data-source"
import app from "./app"

const port = process.env.PORT || 3000

async function bootStrap(){
  await AppDataSource.initialize()

  app.listen(port, () => console.log("app running at http://localhost:" + port))
}

bootStrap()