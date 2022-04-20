import cors from "cors";
import express from "express";

import errorHandler from "./middlewares/errorHandler.js";
import * as itemsController from "./controllers/itemsController.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req, res) => res.sendStatus(200));
app.get("/", itemsController.getAllItems);
app.get("/item/:id", itemsController.getOneItem);
app.post("/item", itemsController.postOneItem);
app.put("/item/sell/:id", itemsController.sellOneItem);

app.use(errorHandler);

export default app;
