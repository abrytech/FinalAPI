import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    product(id: ID!): Product
    products:[Product!]!,
    whereProducts(where: WhereProducts!):[Product!]!
}
extend type Mutation{
  addProduct(name: String, code: String, type: String!, newProduct: Boolean!, productStatus: String!, futuredProduct: Boolean!, description: String, shortDescription: String, dicountId: Int, brand: ID, model: ID, image: ImageFileInput, gallery: String, enableShare: Boolean, isVariable: Boolean, warranty: Int, categoryId: ID, vendorId: ID): Product
  updateProduct(id: ID!, data: ProductInput!): Product
  deleteProduct(id: ID!): Boolean
  deleteProductByWhere(where: WhereProducts!): Boolean
}

input ProductInput{
      name: String,
      code: String,
      type: String,
      newProduct: Boolean,
      productStatus: String,
      futuredProduct: Boolean,
      description: String,
      shortDescription: String,
      dicountId: Int,
      brandId: ID,
      modelId: ID,
      imageId: Int,
      # gallery: String,
      enableShare: Boolean,
      isVariable: Boolean,
      warranty: Int,
      categoryId: ID,
      vendorId: ID
}
input WhereProducts{
      name: String,
      code: String,
      type: String,
      newProduct: Boolean,
      productStatus: String,
      futuredProduct: Boolean,
      dicountId: Int,
      brandId: ID,
      categoryId: ID,
      modelId: ID
}
# type DeleteType{ 
#   deletedCount: Int, 
#   ok: Int, 
#   n: Int
# }
type Product{
      id: ID!,
      name: String,
      code: String,
      type: String,
      newProduct: Boolean,
      productStatus: String,
      futuredProduct: Boolean,
      review: Review,
      description: String,
      shortDescription: String,
      dicountId: Discount,
      brandId: Brand,
      modelId: Model,
      imageId: Int,
      # gallery: String,
      enableShare: Boolean,
      isVariable: Boolean,
      warranty: Int,
      categoryId: Category,
      vendorId: Vendor
      createdAt: String,
      updatedAt: String, 
      createdBy: User,
      updatedBy: User     
}
`
