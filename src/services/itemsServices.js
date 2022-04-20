import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient()

async function getAllItems() {
  const allItems = await prisma.item.findMany()
  return allItems;
}

async function getOneItem(id){
    return await prisma.item.findUnique({
        where:{
            id: id
        }
    })
}

export { getAllItems, getOneItem };