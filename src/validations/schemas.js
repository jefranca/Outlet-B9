import joi from "joi";

const itemsSchemma = joi.object({
  product: joi.string().required(),
  size: joi.string().required(),
  img: joi.string().required(),
  amount: joi.number().required(),
});

const userSchemma = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required()
})

const userSignInSchemma = joi.object({
  email: joi.string().required(),
  password: joi.string().required()
})

export { itemsSchemma, userSchemma, userSignInSchemma };