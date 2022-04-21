import * as schemas from "./schemas.js";
import ValidationError from "../errors/ValidationError.js";

async function itemsValidations(item) {
  const joiValidation = schemas.itemsSchemma.validate(item);
  if (joiValidation.error)
    throw new ValidationError(joiValidation.error.details[0].message);
}

async function userValidations(user) {
  const joiValidation = schemas.userSchemma.validate(user);
  if (joiValidation.error)
    throw new ValidationError(joiValidation.error.details[0].message);
}

export { itemsValidations, userValidations };