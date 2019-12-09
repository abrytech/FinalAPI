import { AuthenticationError } from 'apollo-server-express'
import models from './models'
import { compareSync } from 'bcryptjs'
const message = 'Your Email or Password is InCorrect'
const signedIn = req => req.userId
export const attemptSignIn = async (email, password) => {
  const user = await models.Users.findOne({ email })
  if (!user) {
    throw new AuthenticationError(message)
  }
  const isValid = compareSync(password, user.password)
  if (isValid) {
    throw new AuthenticationError('Your Password is InCorrect')
  }
  return user
}
export const checkSignedIn = req => {
  if (!signedIn(req)) {
    throw new AuthenticationError('You not signedIn')
  }
}
export const checkSignedOut = req => {
  if (signedIn(req)) {
    throw new AuthenticationError('You are already signedIn')
  }
}
export const signOut = (req, res) => {
  delete req.userId
  res.clearCookie('access-token')
  return true
}
