import cors from "cors";
import express from "express";

import errorHandler from "./middlewares/errorHandler.js";
import * as itemsController from "./controllers/itemsController.js";
import * as userController from "./controllers/userController.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req, res) => res.sendStatus(200));
app.get("/", itemsController.getAllItems);
app.get("/item/:id", itemsController.getOneItem);
app.post("/item", itemsController.postOneItem);
app.put("/item/sell/:id", itemsController.sellOneItem);
app.put("/item/add", itemsController.addMore)
app.post("/sign-up", userController.signUp)
app.post("/sign-in", userController.signIn)

app.use(errorHandler);

export default app;
