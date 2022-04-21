import ValidationError from "../errors/ValidationError.js";

import * as validations from "../validations/validations.js";
import * as userServices from "../services/userServices.js";
import UserAlreadyExist from "../errors/UserAlreadyExist.js";
import InvalidPassword from "../errors/InvalidPassword.js";
import NonexistentUser from "../errors/NonexistentUser.js";

async function signUp(req, res, next) {
  try {
    await validations.userValidations(req.body);
    await userServices.signUp(req.body);

    res.sendStatus(201);
  } catch (error) {
    if (error instanceof ValidationError)
      return res.status(400).send(error.message);
    if (error instanceof UserAlreadyExist)
      return res.status(400).send(error.message);
    next(error);
  }
}

async function signIn(req, res, next) {
  try {
    await validations.userSignInValidations(req.body);
    const userData = await userServices.signIn(req.body);

    res.status(200).send(userData);
  } catch (error) {
    if (error instanceof ValidationError)
      return res.status(400).send(error.message);
    if (error instanceof NonexistentUser)
      return res.status(400).send(error.message);
    if (error instanceof InvalidPassword)
      return res.status(403).send(error.message);
    next(error);
  }
}

async function logout() {
  const token = req.headers["authorization"]?.replace("Bearer ", "");

  try {
    await userServices.logout(token);
    res.status(200).send("session closed");
  } catch (error) {
    next(error);
  }
}

export { signUp, signIn, logout };
