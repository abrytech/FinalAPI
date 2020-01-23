import models from '../../models'
import * as Auth from '../../auth'
import { UserInputError } from 'apollo-server-core'

export default {
  Query: {
    brand: async (root, { id }, context, info) => {
      const brand = await models.Brands.findByPk(id)
      return brand
    },
    brands: async (root, args, context, info) => {
      const brands = await models.Brands.findAll()
      return brands
    }
  },

  Mutation: {
    addBrand: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      await models.Brands.create(args)
    },

    updateBrand: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      try {
        const newBrand = await models.Brands.update(args.data, { where: { id: args.id } })
        return newBrand
      } catch (error) {
        throw new Error(error)
      }
    },

    deleteBrand: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      const { deletedCount } = await models.Brands.destroy({ where: { id: args.id } })
      return deletedCount !== 0
    },
    deleteBrandByWhere: async (root, args, { req }, info) => {
      if (args) { throw new UserInputError('Invalid UserInput') }
      Auth.checkSignedIn(req)
      try {
        const { deletedCount } = await models.Brands.destroy({ where: args })
        return deletedCount !== 0
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
