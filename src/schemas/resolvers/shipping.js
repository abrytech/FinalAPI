import models from '../../models'
import * as Auth from '../../auth'
import { UserInputError } from 'apollo-server-core'

export default {
  Query: {
    shipping: async (root, { id }, context, info) => {
      const shipping = await models.Shippings.findByPk(id)
      return shipping
    },
    shippings: async (root, args, context, info) => {
      const shippings = await models.Shippings.findAll()
      return shippings
    }
  },

  Mutation: {
    addShipping: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      await models.Shippings.create(args)
    },

    updateShipping: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      try {
        const newShipping = await models.Shippings.update(args.data, { where: { id: args.id } })
        return newShipping
      } catch (error) {
        throw new Error(error)
      }
    },

    deleteShipping: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      const { deletedCount } = await models.Shippings.destroy({ where: { id: args.id } })
      return deletedCount !== 0
    },
    deleteShippingByWhere: async (root, args, { req }, info) => {
      if (args) { throw new UserInputError('Invalid UserInput') }
      Auth.checkSignedIn(req)
      try {
        const { deletedCount } = await models.Shippings.destroy({ where: args })
        return deletedCount !== 0
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
