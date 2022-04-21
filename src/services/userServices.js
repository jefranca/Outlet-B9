import pkg from "@prisma/client";
import UserAlreadyExist from "../errors/UserAlreadyExist.js";
import bcrypt from 'bcrypt'

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function signUp(body){
    const passwordHash = bcrypt.hashSync(body.password, 10);
    const alreadyExist = await prisma.user.findUnique({
        where: {
          email: body.email,
        },
      });
      if(alreadyExist) throw new UserAlreadyExist("This e-mail already have an user")
    const item = await prisma.user.create({
        data: {
          name: body.name,
          email: body.email,
          password: passwordHash,
        },
      });
}

async function signIn(){
    
}

export { signUp }