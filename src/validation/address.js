import joi from '@hapi/joi'
const address = joi
  .string()
  .required()
  .label('Address 1')
const city = joi
  .string()
  .required()
  .label('City')
const country = joi
  .string()
  .required()
  .label('Country')
const state = joi
  .string()
  .required()
  .label('State')
const postalCode = joi
  .number().max(6).min(4)
  .required()
  .label('Postal Code')
export const addressValidation = joi.object().keys({
  address,
  city,
  state,
  country,
  postalCode
})
