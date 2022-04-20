import NonexistentItem from '../errors/NonexistentItem.js';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient()

async function getAllItems() {
  const allItems = await prisma.item.findMany()
  return allItems;
}

async function getOneItem(id){
    const item = await prisma.item.findUnique({
        where:{
            id: id
        }
    })
    if(!item) throw new NonexistentItem("The item does not exist")
    return item;
}

async function postOneItem({product,size,img,amount}){
    const item = await prisma.item.create({
        data:{
            product: product,
            size: size,
            img: img,
            amount: amount
        }
    })
}

export { getAllItems, getOneItem, postOneItem };