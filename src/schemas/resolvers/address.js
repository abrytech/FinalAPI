import models from '../../models'
import * as Auth from '../../auth'
import { UserInputError } from 'apollo-server-core'

export default {
  Query: {
    address: async (root, { id }, context, info) => {
      const address = await models.Addresses.findByPk(id)
      return address
    },
    addresses: async (root, args, context, info) => {
      const addresses = await models.Addresses.findAll()
      return addresses
    }
  },

  Mutation: {
    addAddress: async (root, args, { req }, info) => {
      // if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid address ID`) }
      Auth.checkSignedIn(req)
      await models.Addresses.create(args)
    },

    updateAddress: async (root, args, { req }, info) => {
      // if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid address ID`) }
      Auth.checkSignedIn(req)
      try {
        const newAddress = await models.Addresses.update(args.data, { where: { id: args.id } })
        return newAddress
      } catch (error) {
        throw new Error(error)
      }
    },

    deleteAddress: async (root, args, { req }, info) => {
      // if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid address ID`) }
      Auth.checkSignedIn(req)
      const { deletedCount } = await models.Addresses.destroy({ where: { id: args.id } })
      return deletedCount !== 0
    },
    deleteAddressByWhere: async (root, args, { req }, info) => {
      if (args) { throw new UserInputError('Invalid UserInput') }
      Auth.checkSignedIn(req)
      try {
        const { deletedCount } = await models.Addresses.destroy({ where: args })
        return deletedCount !== 0
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
