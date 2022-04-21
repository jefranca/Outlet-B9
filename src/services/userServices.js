import pkg from "@prisma/client";
import UserAlreadyExist from "../errors/UserAlreadyExist.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import InvalidPassword from "../errors/InvalidPassword.js";
import NonexistentUser from "../errors/NonexistentUser.js";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function signUp(body) {
  const passwordHash = bcrypt.hashSync(body.password, 10);
  const alreadyExist = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (alreadyExist)
    throw new UserAlreadyExist("This e-mail already have an user");
  const item = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: passwordHash,
    },
  });
}

async function signIn({ email, password }) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) throw new NonexistentUser("this e-mail does not exist");
  if (!bcrypt.compareSync(password, user.password))
    throw new InvalidPassword("Incorrect Password");
  const token = uuid();
  const session = await prisma.session.create({
    data: {
      userId: user.id,
      token: token,
    },
  });
  delete user.password;
  const userData = {
    token,
    user,
  };
  return userData;
}

async function logout(token){
    await prisma.session.delete({
        where: {
          token,
        },
    })
}

export { signUp, signIn, logout };
