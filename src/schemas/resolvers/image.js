import models from '../../models'
import * as Auth from '../../auth'
import * as ImageOps from '../../ops/image_ops'
import { UserInputError } from 'apollo-server-core'

export default {
  Query: {
    imageFile: async (root, args, context, info) => {
      const images = await ImageOps.getPhoto(args)
      return images
    },
    imageFiles: async (root, args, context, info) => {
      const imageFiles = await models.ImageFile.findAll()
      return imageFiles
    },
    searchImageFiles: async (root, args, context, info) => {
      const images = await ImageOps.searchPhotos(args)
      return images
    }
  },

  Mutation: {
    addImageFile: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      const image = await ImageOps.addPhoto(args)
      return image
    },

    updateImageFile: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      try {
        const image = await ImageOps.editPhoto(args)
        return image
      } catch (error) {
        throw new Error(error)
      }
    },

    deleteImageFile: async (root, args, { req }, info) => {
      Auth.checkSignedIn(req)
      const { deletedCount } = await models.ImageFile.destroy({ where: { id: args.id } })
      return deletedCount !== 0
    },
    deleteImageFileByWhere: async (root, args, { req }, info) => {
      if (args) { throw new UserInputError('Invalid UserInput') }
      Auth.checkSignedIn(req)
      try {
        const { deletedCount } = await models.ImageFile.destroy({ where: args })
        return deletedCount !== 0
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
