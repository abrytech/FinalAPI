import models from '../../models'
import * as Auth from '../../auth'

export default {
  Query: {
    discount: async (root, { id }, context, info) => {
      const discount = await models.Discounts.findByPk(id)
      return discount
    },
    discounts: async (root, args, context, info) => {
      const discounts = await models.Discounts.findAll()
      return discounts
    }
  },

  Mutation: {
    addDiscount: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      await models.Discounts.create(args)
    },

    updateDiscount: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      try {
        const newDiscount = await models.Discounts.update(args.data, { where: { id: args.id } })
        return newDiscount
      } catch (error) {
        throw new Error(error)
      }
    },

    deleteDiscount: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      const { deletedCount } = await models.Discounts.destroy({ where: { id: args.id } })
      return deletedCount !== 0
    }
  }
}
