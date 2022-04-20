import * as schemas from "./schemas.js";
import ValidationError from "../errors/ValidationError.js";

async function itemsValidations(item) {
  const joiValidation = schemas.toolsSchemma.validate(item);
  if (joiValidation.error)
    throw new ValidationError(joiValidation.error.details[0].message);
}

export { itemsValidations };