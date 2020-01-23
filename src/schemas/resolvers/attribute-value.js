import models from '../../models'
import * as Auth from '../../auth'
import { UserInputError } from 'apollo-server-core'

export default {
  Query: {
    attributeValue: async (root, { id }, context, info) => {
      const attributeValue = await models.AttributeValues.findByPk(id)
      return attributeValue
    },
    attributeValues: async (root, args, context, info) => {
      const attributeValues = await models.AttributeValues.findAll()
      return attributeValues
    }
  },

  Mutation: {
    addAttributeValue: async (root, args, { req }, info) => {
      // if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid attributeValue ID`) }
      Auth.checkSignedIn(req)
      await models.AttributeValues.create(args)
    },

    updateAttributeValue: async (root, args, { req }, info) => {
      // if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid attributeValue ID`) }
      Auth.checkSignedIn(req)
      try {
        const newAttributeValue = await models.AttributeValues.update(args.data, { where: { id: args.id } })
        return newAttributeValue
      } catch (error) {
        throw new Error(error)
      }
    },

    deleteAttributeValue: async (root, args, { req }, info) => {
      // if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid attributeValue ID`) }
      Auth.checkSignedIn(req)
      const { deletedCount } = await models.AttributeValues.destroy({ where: { id: args.id } })
      return deletedCount !== 0
    },
    deleteAttributeValueByWhere: async (root, args, { req }, info) => {
      if (args) { throw new UserInputError('Invalid UserInput') }
      Auth.checkSignedIn(req)
      try {
        const { deletedCount } = await models.AttributeValues.destroy({ where: args })
        return deletedCount !== 0
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
