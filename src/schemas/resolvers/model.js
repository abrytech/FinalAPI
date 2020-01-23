import modl from '../../models'
import * as Auth from '../../auth'
import { UserInputError } from 'apollo-server-core'

export default {
  Query: {
    model: async (root, { id }, context, info) => {
      const model = await modl.Models.findByPk(id)
      return model
    },
    models: async (root, args, context, info) => {
      const models = await modl.Models.findAll()
      return models
    }
  },

  Mutation: {
    addModel: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      await modl.Models.create(args)
    },

    updateModel: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      try {
        const newModel = await modl.Models.update(args.data, { where: { id: args.id } })
        return newModel
      } catch (error) {
        throw new Error(error)
      }
    },

    deleteModel: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      const { deletedCount } = await modl.Models.destroy({ where: { id: args.id } })
      return deletedCount !== 0
    },
    deleteModelByWhere: async (root, args, { req }, info) => {
      if (args) { throw new UserInputError('Invalid UserInput') }
      Auth.checkSignedIn(req)
      try {
        const { deletedCount } = await modl.Models.destroy({ where: args })
        return deletedCount !== 0
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
