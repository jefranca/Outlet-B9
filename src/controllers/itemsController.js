import NonexistentItem from "../errors/NonexistentItem.js";
import * as itemsService from "../services/itemsServices.js";

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
    await validations.itemValidation(req.body);
    await itemsService.postOneItem(req.body);

    res.sendStatus(201);
  } catch (error) {
    next(error)
  }
}

export { getAllItems, getOneItem, postOneItem };
