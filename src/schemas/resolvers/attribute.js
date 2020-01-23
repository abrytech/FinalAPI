import models from '../../models'
import * as Auth from '../../auth'
import { UserInputError } from 'apollo-server-core'

export default {
  Query: {
    attribute: async (root, { id }, context, info) => {
      const attribute = await models.Attributes.findByPk(id)
      return attribute
    },
    attributes: async (root, args, context, info) => {
      const attributes = await models.Attributes.findAll()
      return attributes
    }
  },

  Mutation: {
    addAttribute: async (root, args, { req }, info) => {
      // if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid attribute ID`) }
      Auth.checkSignedIn(req)
      await models.Attributes.create(args)
    },

    updateAttribute: async (root, args, { req }, info) => {
      // if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid attribute ID`) }
      Auth.checkSignedIn(req)
      try {
        const newAttribute = await models.Attributes.update(args.data, { where: { id: args.id } })
        return newAttribute
      } catch (error) {
        throw new Error(error)
      }
    },

    deleteAttribute: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      const { deletedCount } = await models.Attributes.destroy({ where: { id: args.id } })
      return deletedCount !== 0
    },
    deleteAttributeByWhere: async (root, args, { req }, info) => {
      if (args) { throw new UserInputError('Invalid UserInput') }
      Auth.checkSignedIn(req)
      try {
        const { deletedCount } = await models.Attributes.destroy({ where: args })
        return deletedCount !== 0
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
