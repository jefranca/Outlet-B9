import * as itemsService from "../services/itemsServices.js"

async function getAllItems(req, res, next) {
  try {
    const allItems = await itemsService.getAllItems();
    return await res.send(allItems);
  } catch (error) {
    next(error);
  }
}

export { getAllItems };
