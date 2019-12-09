import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    product(id: ID!): Product
    products:[Product!]!
}
extend type Mutation{
  addProduct( name: String!, price: Float!, description: String!, quantity: Int!, tag: [String]): Product
  updateProduct(id: ID!, data: ProductInput!): Product
  deleteProduct(id: ID!): Boolean
  deleteProductByName(where: WhereInput!): DeleteType
}

input ProductInput{
      name: String,
      price: Float,
      description: String,
      quantity: Int,
      tag: [String],
}
input WhereInput{
      name: String,
      price: Float,
      quantity: Int
}
type DeleteType{ 
  deletedCount: Int, 
  ok: Int, 
  n: Int
}
type Product{
      id: ID!,
      name: String!,
      price: Float!,
      description: String!,
      quantity: Int!,
      tag: [String],
      createdAt: String,
      updatedAt: String, 
      createdBy: User,
      updatedBy: User     
}
`
