import * as itemsService from "../services/itemsServices.js"

async function getAllItems(req, res, next) {
  try {
    const allItems = await itemsService.getAllItems();
    return await res.send(allItems);
  } catch (error) {
    next(error);
  }
}

async function getOneItem(req,res,next){
    const id = Number(req.params.id);
    try {
        const item = await itemsService.getOneItem(id)
        return await res.send(item);
    } catch (error) {
        next(error)
    }
}

export { getAllItems, getOneItem };
