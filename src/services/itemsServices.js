import NonexistentItem from "../errors/NonexistentItem.js";
import pkg from "@prisma/client";
import SoldOut from "../errors/SoldOut.js";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function getAllItems() {
  const allItems = await prisma.item.findMany();
  return allItems;
}

async function getOneItem(id) {
  const item = await prisma.item.findUnique({
    where: {
      id: id,
    },
  });
  if (!item) throw new NonexistentItem("The item does not exist");
  return item;
}

async function postOneItem({ product, size, img, amount }) {
  const item = await prisma.item.create({
    data: {
      product: product,
      size: size,
      img: img,
      amount: amount,
    },
  });
}

async function sellOneItem(id) {
  const item = await prisma.item.findUnique({
    where: {
      id: id,
    },
  });
  if (!item) throw new NonexistentItem("The item does not exist");
  if (item.amount < 1) throw new SoldOut("This item is already sold out");
  const itemSold = await prisma.item.update({
    where: {
      id: id,
    },
    data: {
      amount: item.amount - 1,
    },
  });
}

async function addMore(id, amount) {
  const item = await prisma.item.findUnique({
    where: {
      id: id,
    },
  });
  if (!item) throw new NonexistentItem("The item does not exist");
  const itemSold = await prisma.item.update({
    where: {
      id: id,
    },
    data: {
      amount: item.amount + amount,
    },
  });
}
export { getAllItems, getOneItem, postOneItem, sellOneItem, addMore };
