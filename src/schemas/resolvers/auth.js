import * as Validation from '../../validation/index'
import models from '../../models'
import * as Auth from '../../auth'
import { sign } from 'jsonwebtoken'
import { ACCESS_TOKEN_SECRET_KEY } from '../../config'

const registerValidation = Validation.default.registerValidation
const loginValidation = Validation.default.loginValidation

export default {
  Query: {
    me: async (root, arg, { req }, info) => {
      Auth.checkSignedIn(req)
      const me = await models.Users.findByPk(req.userId)
      return me
    }
  },

  Mutation: {
    signUp: async (root, args, { req }, info) => {
      Auth.checkSignedOut(req)
      await registerValidation.validateAsync(args)
      const user = await models.Users.create(args)
      return user
    },

    signIn: async (root, args, { req, res }, info) => {
      if (req.userId) {
        const user = await models.Users.findByPk(req.userId)
        return user
      }
      await loginValidation.validateAsync(args)
      const user = await Auth.attemptSignIn(args.email, args.password)
      const accesstoken = sign({ userId: user.id }, ACCESS_TOKEN_SECRET_KEY, { expiresIn: '2h' })
      res.cookie('access-token', accesstoken, { expires: new Date(Date.now() + 7200000) })
      return user
    },

    signOut: (root, args, { req, res }, info) => {
      Auth.checkSignedIn(req)
      return Auth.signOut(req, res)
    }
  }
}
