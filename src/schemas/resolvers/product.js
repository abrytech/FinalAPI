export default {
  Query: {
    product: async (root, { id }, context, info) => {
      // const product = await productModel.findById(id).populate('createdBy').populate('updatedBy')
      // return product
    },
    products: async (root, args, context, info) => {
      // const products = await productModel.find({}).populate('createdBy').populate('updatedBy')
      // return products
    }
  },

  Mutation: {
    addProduct: async (root, args, { req }, info) => {
      // await Auth.checkSignedIn(req)
      // args.createdBy = args.updatedBy = req.session.userId
      // await Validation.default.productValidation.validateAsync(args)
      // const product = await productModel.create(args)
      // return product
    },
    updateProduct: async (root, args, { req }, info) => {
      // if (!mongoose.Types.ObjectId.isValid(args.id)) { throw new UserInputError(`${args.id} is not a valid Product ID`) }
      // await Auth.checkSignedIn(req)
      // await joi.validate(args.data, Validation.default.productValidation)
      // await productModel.findByIdAndUpdate(args.id, args.data, { new: true })
    },
    deleteProduct: async (root, args, { req }, info) => {
      // if (!mongoose.Types.ObjectId.isValid(args.id)) {
      //   throw new UserInputError(`${args.id} is not a valid product ID`)
      // }
      // await Auth.checkSignedIn(req)
      // const { deletedCount } = await productModel.deleteOne({ _id: args.id })
      // return deletedCount !== 0
    },
    deleteProductByName: async (root, args, { req }, info) => {
      // console.log(args)
      // await Auth.checkSignedIn(req)
      // if (!args.where.name) throw new UserInputError('Invalid Name input')
      // const result = await productModel.deleteMany(args.where)
      // return result
    }
  }
}
