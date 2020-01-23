import models from '../../models'
import * as Auth from '../../auth'
import * as ImageOps from '../../ops/image_ops'
import * as Validation from '../../validation/index'
import { UserInputError } from 'apollo-server-core'
const isIDValid = Validation.default.isIDValid

export default {
  Query: {
    product: async (root, { id }, context, info) => {
      const product = await models.Products.findByPk(id)
      return product
    },
    products: async (root, args, context, info) => {
      const products = await models.Products.findAll()
      return products
    }
  },

  Mutation: {
    addProduct: async (root, args, { req }, info) => {
      if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid product ID`) }
      Auth.checkSignedIn(req)
      if (args.image) {
        const image = await ImageOps.addPhoto(args.image)
        args.imageId = image.id
      }
      await models.Products.create(args)
    },

    updateProduct: async (root, args, { req }, info) => {
      if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid product ID`) }
      Auth.checkSignedIn(req)
      try {
        const newProduct = await models.Products.update(args.data, { where: { id: args.id } })
        return newProduct
      } catch (error) {
        throw new Error(error)
      }
    },

    deleteProduct: async (root, args, { req }, info) => {
      if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid product ID`) }
      Auth.checkSignedIn(req)
      const { deletedCount } = await models.Products.destroy({ where: { id: args.id } })
      return deletedCount !== 0
    },
    deleteProductByWhere: async (root, args, { req }, info) => {
      if (args) { throw new UserInputError('Invalid UserInput') }
      Auth.checkSignedIn(req)
      try {
        const { deletedCount } = await models.Products.destroy({ where: args })
        return deletedCount !== 0
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
