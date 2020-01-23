import models from '../../models'
import * as Auth from '../../auth'
import * as Validation from '../../validation/index'
import { UserInputError } from 'apollo-server-core'
import * as ImageOps from '../../ops/image_ops'

const registerValidation = Validation.default.registerValidation
const isIDValid = Validation.default.idValidation

export default {
  Query: {
    user: (root, { id }, { req }, info) => {
      Auth.checkSignedIn(req)
      return models.Users.findByPk(id)
    },
    users: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      return models.Users.findAll()
    },
    whereUsers: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      return models.Users.findAll(args)
    }
  },

  Mutation: {
    addUser: async (root, args, { req }, info) => {
      if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid user ID`) }
      // Auth.checkSignedIn(req)
      if (args.image) {
        const image = await ImageOps.addPhoto(args.image)
        args.imageId = image.id
      }
      await registerValidation.validateAsync(args)
      const user = await models.Users.create(args)
      return user
    },

    updateUser: async (root, args, { req }, info) => {
      if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid user ID`) }
      Auth.checkSignedIn(req)
      try {
        const newUser = await models.Users.update(args.data, { where: { id: args.id } })
        return newUser
      } catch (error) {
        throw new Error(error)
      }
    },

    deleteUser: async (root, args, { req }, info) => {
      if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid user ID`) }
      Auth.checkSignedIn(req)
      const { deletedCount } = await models.Users.deleteOne({ id: args.id })
      return deletedCount !== 0
    }
  }
}
