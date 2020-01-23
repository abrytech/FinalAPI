import models from '../../models'
import * as Auth from '../../auth'
import * as ImageOps from '../../ops/image_ops'
import * as Validation from '../../validation/index'
import { UserInputError } from 'apollo-server-core'
const isIDValid = Validation.default.isIDValid

export default {
  Query: {
    variation: async (root, { id }, context, info) => {
      const variation = await models.Variations.findByPk(id)
      return variation
    },
    variations: async (root, args, context, info) => {
      const variations = await models.Variations.findAll()
      return variations
    }
  },

  Mutation: {
    addVariation: async (root, args, { req }, info) => {
      if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid variation ID`) }
      Auth.checkSignedIn(req)
      if (args.image) {
        const image = await ImageOps.addPhoto(args.image)
        args.imageId = image.id
      }
      await models.Variations.create(args)
    },

    updateVariation: async (root, args, { req }, info) => {
      if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid variation ID`) }
      Auth.checkSignedIn(req)
      try {
        const newVariation = await models.Variations.update(args.data, { where: { id: args.id } })
        return newVariation
      } catch (error) {
        throw new Error(error)
      }
    },

    deleteVariation: async (root, args, { req }, info) => {
      if (await isIDValid.validateAsync(args.id)) { throw new UserInputError(`${args.id} is not a valid variation ID`) }
      Auth.checkSignedIn(req)
      const { deletedCount } = await models.Variations.destroy({ where: { id: args.id } })
      return deletedCount !== 0
    },
    deleteVariationByWhere: async (root, args, { req }, info) => {
      if (args) { throw new UserInputError('Invalid UserInput') }
      Auth.checkSignedIn(req)
      try {
        const { deletedCount } = await models.Variations.destroy({ where: args })
        return deletedCount !== 0
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
