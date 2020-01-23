import models from '../../models'
import * as Auth from '../../auth'
import * as Validation from '../../validation/index'
import * as ImageOps from '../../ops/image_ops'
import { UserInputError } from 'apollo-server-core'
const isIDValid = Validation.default.isIDValid

export default {
  Query: {
    category: async (root, { id }, context, info) => {
      const category = await models.Categories.findByPk(id)
      return category
    },
    categories: async (root, args, context, info) => {
      const categories = await models.Categories.findAll()
      return categories
    }
  },

  Mutation: {
    addCategory: async (root, args, { req }, info) => {
      if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid category ID`) }
      Auth.checkSignedIn(req)
      if (args.image) {
        const image = await ImageOps.addPhoto(args.image)
        args.imageId = image.id
      }
      await models.Categories.create(args)
    },

    updateCategory: async (root, args, { req }, info) => {
      if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid category ID`) }
      Auth.checkSignedIn(req)
      try {
        const newCategory = await models.Categories.update(args.data, { where: { id: args.id } })
        return newCategory
      } catch (error) {
        throw new Error(error)
      }
    },

    deleteCategory: async (root, args, { req }, info) => {
      if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid category ID`) }
      Auth.checkSignedIn(req)
      const { deletedCount } = await models.Categories.destroy({ where: { id: args.id } })
      return deletedCount !== 0
    },
    deleteCategoryByWhere: async (root, args, { req }, info) => {
      if (args) { throw new UserInputError('Invalid UserInput') }
      Auth.checkSignedIn(req)
      try {
        const { deletedCount } = await models.Categories.destroy({ where: args })
        return deletedCount !== 0
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
