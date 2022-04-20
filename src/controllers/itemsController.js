import NonexistentItem from "../errors/NonexistentItem.js";
import ValidationError from "../errors/ValidationError.js";

import * as validations from "../validations/validations.js";
import * as itemsService from "../services/itemsServices.js";
import SoldOut from "../errors/SoldOut.js";

async function getAllItems(req, res, next) {
  try {
    const allItems = await itemsService.getAllItems();
    return await res.send(allItems);
  } catch (error) {
    next(error);
  }
}

async function getOneItem(req, res, next) {
  const id = Number(req.params.id);
  try {
    const item = await itemsService.getOneItem(id);
    return await res.send(item);
  } catch (error) {
    if (error instanceof NonexistentItem)
      return res.status(400).send("The item does not exist");
    next(error);
  }
}

async function postOneItem(req, res, next) {
  try {
    await validations.itemsValidations(req.body);
    await itemsService.postOneItem(req.body);

    res.sendStatus(201);
  } catch (error) {
    if (error instanceof ValidationError)
      return res.status(400).send(error.message);
    next(error);
  }
}

async function sellOneItem(req, res, next) {
  try {
    const id = Number(req.params.id);
    await itemsService.sellOneItem(id);

    return res.sendStatus(200);
  } catch (error) {
    if (error instanceof NonexistentItem)
      return res.status(400).send("The item does not exist");
    if (error instanceof SoldOut) return res.status(400).send(error.message);
    next(error);
  }
}

export { getAllItems, getOneItem, postOneItem, sellOneItem };
