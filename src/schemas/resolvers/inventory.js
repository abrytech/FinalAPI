import models from '../../models'
import * as Auth from '../../auth'
import { UserInputError } from 'apollo-server-core'

export default {
  Query: {
    inventory: async (root, { id }, context, info) => {
      const inventory = await models.Inventories.findByPk(id)
      return inventory
    },
    inventories: async (root, args, context, info) => {
      const inventories = await models.Inventories.findAll()
      return inventories
    }
  },

  Mutation: {
    addInventory: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      await models.Inventories.create(args)
    },

    updateInventory: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      try {
        const newInventory = await models.Inventories.update(args.data, { where: { id: args.id } })
        return newInventory
      } catch (error) {
        throw new Error(error)
      }
    },

    deleteInventory: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      const { deletedCount } = await models.Inventories.destroy({ where: { id: args.id } })
      return deletedCount !== 0
    },
    deleteInventoryByWhere: async (root, args, { req }, info) => {
      if (args) { throw new UserInputError('Invalid UserInput') }
      Auth.checkSignedIn(req)
      try {
        const { deletedCount } = await models.Inventories.destroy({ where: args })
        return deletedCount !== 0
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
