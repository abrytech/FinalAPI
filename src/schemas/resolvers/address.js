export default {
  Query: {
    address: (root, { id }, context, info) => {
      // return addressModel.findById(id).populate('userId').populate('createdAt').populate('updatedAt')
    },
    addresses: (root, args, context, info) => {
      // return addressModel.find({}).populate('userId').populate('createdAt').populate('updatedAt')
    }
  },

  Mutation: {
    addAddress: async (root, args, { req }, info) => {
      // checkSignedIn(req)
      // await addressValidation.validateAsync(args)
      // return addressModel.create(args)
    },
    updateAddress: async (root, args, { req }, info) => {
      // if (!mongoose.Types.ObjectId.isValid(args.id)) {
      //   throw new UserInputError(`${args.id} is not a valid address ID`)
      // }
      // checkSignedIn(req)
      // await addressValidation.validateAsync(args.data)
      // await addressModel.findByIdAndUpdate(args.id, args.data, { new: true })
    },
    deleteAddress: async (root, args, { req }, info) => {
      // if (mongoose.Types.ObjectId.isValid(args.id)) {
      //   throw new UserInputError(`${args.id} is not a valid address ID`)
      // }
      // checkSignedIn(req)
      // const { deletedCount } = await addressModel.deleteOne({ _id: args.id })
      // return deletedCount !== 0
    },
    deleteAddressByWhere: async (root, args, { req }, info) => {
      // checkSignedIn(req)
      // const where = args.where
      // if (!where.address && !where.city && !where.state && !where.country && !where.postalCode && !where.userId && !where.createdAt && !where.updatedAt) {
      //   throw new UserInputError('Invalid Parameter input')
      // }
      // const result = await addressModel.deleteMany(where)
      // return result
    }
  }
}
