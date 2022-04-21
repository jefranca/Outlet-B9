import ValidationError from "../errors/ValidationError.js";

import * as validations from "../validations/validations.js";
import * as userServices from "../services/userServices.js";
import UserAlreadyExist from "../errors/UserAlreadyExist.js";

async function signUp(req, res, next) {
  try {
    await validations.userValidations(req.body)
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

export { signUp }