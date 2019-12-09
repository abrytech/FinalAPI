import joi from '@hapi/joi'
const firstName = joi
  .string()
  .required()
  .label('First Name')
const lastName = joi
  .string()
  .required()
  .label('Last Name')
const username = joi
  .string()
  .required()
  .label('UserName')
const phoneNo = joi
  .string()
  .label('Phone No')
const displayName = joi
  .string()
  .label('Display Name')
const userImage = joi
  .string()
  .label('User Image')
const email = joi
  .string()
  .email()
  .required()
  .label('Email')
const gender = joi
  .string()
  .max(1)
  .min(1)
  .required()
  .label('Gender')
const password = joi
  .string().max(30)
  .required()
  .label('Password')

// const
// .regex(/^(?=\S*[A-Z])(?=\S*[a-z])(?=\S*\d).*$/)
// .options({
//   language: {
//     string: {
//       regex: {
//         base: 'Please Include at least One Uppercase, Lowwercase & One Digit Character'
//       }
//     }
//   }
// })
export const registerValidation = joi.object().keys({ firstName, lastName, displayName, email, username, password, gender, phoneNo, userImage })

export const loginValidation = joi.object().keys({ email, password })

export const idValidation = joi.object().keys({ id: joi.string().required().min(30) })

//   repeat_password: joi.ref('password'),
// at least 8 characters
// at least 1 numeric character
// at least 1 lowercase letter
// at least 1 uppercase letter
// at least 1 special character
//   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
