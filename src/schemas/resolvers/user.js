import models from '../../models'
import * as Auth from '../../auth'
import uuidv4 from 'uuid/v4'
import * as Validation from '../../validation/index'
// import { UserInputError } from 'apollo-server-core'

const registerValidation = Validation.default.registerValidation
// const idValidation = Validation.default.idValidation

export default {
  Query: {
    user: (root, { id }, { req }, info) => {
      // checkSignedIn(req)
      return models.Users.findByPk(id)
    },
    users: async (root, args, { req }, info) => {
      // checkSignedIn(req)
      return models.Users.findAll()
    }
  },

  Mutation: {
    addUser: async (root, args, { req }, info) => {
      // if (await idValidation.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid user ID`) }
      Auth.checkSignedIn(req)
      await registerValidation.validateAsync(args)
      args.id = uuidv4()
      await models.Users.create(args)
    },

    updateUser: async (root, args, { req }, info) => {
      // if (await idValidation.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid user ID`) }
      Auth.checkSignedIn(req)
      try {
        const newUser = await models.Users.update(args.data, { where: { id: args.id } })
        return newUser
      } catch (error) {
        throw new Error(error)
      }
    },

    deleteUser: async (root, args, { req }, info) => {
      // if (await idValidation.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid user ID`) }
      Auth.checkSignedIn(req)
      const { deletedCount } = await models.Users.deleteOne({ id: args.id })
      return deletedCount !== 0
    }
  }
}
