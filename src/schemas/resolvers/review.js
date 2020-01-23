import models from '../../models'
import * as Auth from '../../auth'
import { UserInputError } from 'apollo-server-core'

export default {
  Query: {
    review: async (root, { id }, context, info) => {
      const review = await models.Reviews.findByPk(id)
      return review
    },
    reviews: async (root, args, context, info) => {
      const reviews = await models.Reviews.findAll()
      return reviews
    }
  },

  Mutation: {
    addReview: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      await models.Reviews.create(args)
    },

    updateReview: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      try {
        const newReview = await models.Reviews.update(args.data, { where: { id: args.id } })
        return newReview
      } catch (error) {
        throw new Error(error)
      }
    },

    deleteReview: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      const { deletedCount } = await models.Reviews.destroy({ where: { id: args.id } })
      return deletedCount !== 0
    },
    deleteReviewByWhere: async (root, args, { req }, info) => {
      if (args) { throw new UserInputError('Invalid UserInput') }
      Auth.checkSignedIn(req)
      try {
        const { deletedCount } = await models.Reviews.destroy({ where: args })
        return deletedCount !== 0
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
