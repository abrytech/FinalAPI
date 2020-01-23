import models from '../../models'
import * as Auth from '../../auth'
import * as ImageOps from '../../ops/image_ops'
import * as Validation from '../../validation/index'
import { UserInputError } from 'apollo-server-core'
const isIDValid = Validation.default.isIDValid

export default {
  Query: {
    vendor: async (root, { id }, context, info) => {
      const vendor = await models.Vendors.findByPk(id)
      return vendor
    },
    vendors: async (root, args, context, info) => {
      const vendors = await models.Vendors.findAll()
      return vendors
    }
  },

  Mutation: {
    addVendor: async (root, args, { req }, info) => {
      if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid vendor ID`) }
      Auth.checkSignedIn(req)
      if (args.image) {
        const image = await ImageOps.addPhoto(args.image)
        args.imageId = image.id
      }
      const image = await ImageOps.addPhoto(args.image)
      args.image = image.id
      await models.Vendors.create(args)
    },

    updateVendor: async (root, args, { req }, info) => {
      if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid vendor ID`) }
      Auth.checkSignedIn(req)
      try {
        const newVendor = await models.Vendors.update(args.data, { where: { id: args.id } })
        return newVendor
      } catch (error) {
        throw new Error(error)
      }
    },

    deleteVendor: async (root, args, { req }, info) => {
      if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid vendor ID`) }
      Auth.checkSignedIn(req)
      const { deletedCount } = await models.Vendors.destroy({ where: { id: args.id } })
      return deletedCount !== 0
    },
    deleteVendorByWhere: async (root, args, { req }, info) => {
      if (args) { throw new UserInputError('Invalid UserInput') }
      Auth.checkSignedIn(req)
      try {
        const { deletedCount } = await models.Vendors.destroy({ where: args })
        return deletedCount !== 0
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
