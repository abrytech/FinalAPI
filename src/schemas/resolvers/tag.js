import models from '../../models'
import * as Auth from '../../auth'
import { UserInputError } from 'apollo-server-core'

export default {
  Query: {
    tag: async (root, { id }, context, info) => {
      const tag = await models.Tags.findByPk(id)
      return tag
    },
    tags: async (root, args, context, info) => {
      const tags = await models.Tags.findAll()
      return tags
    }
  },

  Mutation: {
    addTag: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      await models.Tags.create(args)
    },

    updateTag: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      try {
        const newTag = await models.Tags.update(args.data, { where: { id: args.id } })
        return newTag
      } catch (error) {
        throw new Error(error)
      }
    },

    deleteTag: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      const { deletedCount } = await models.Tags.destroy({ where: { id: args.id } })
      return deletedCount !== 0
    },
    deleteTagByWhere: async (root, args, { req }, info) => {
      if (args) { throw new UserInputError('Invalid UserInput') }
      Auth.checkSignedIn(req)
      try {
        const { deletedCount } = await models.Tags.destroy({ where: args })
        return deletedCount !== 0
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
