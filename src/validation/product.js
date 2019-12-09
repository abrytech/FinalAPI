import joi from '@hapi/joi'
const updatedBy = joi.string().required()
const createdBy = joi.string().required()
const name = joi.string().required()
const description = joi.string()
const price = joi.number().required()
const tag = joi.array().items(joi.string())
const quantity = joi.number().greater(0).required()
export const productValidation = joi.object().keys({
  name,
  price,
  quantity,
  tag,
  description,
  createdBy,
  updatedBy
})
