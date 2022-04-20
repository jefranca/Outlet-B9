import joi from "joi";

const itemsSchemma = joi.object({
  product: joi.string().required(),
  size: joi.string().required(),
  img: joi.string().required(),
  amount: joi.number().required(),
});

export { itemsSchemma };