import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    brand(id: ID!): Brand
    brands:[Brand!]!
}
extend type Mutation{
  addBrand(categoryId: ID!, name: String!): Brand
  updateBrand(id: ID!, data: BrandInput!): Brand 
  deleteBrand(id: ID!): Boolean
  deleteBrandByWhere(where: WhereBrands!): Boolean
}
type Brand{
    id: ID!,
    categoryId: Attribute!,
    name: String!
}
input WhereBrands{
    categoryId: ID!,
    name: String!
}
input BrandInput{
    categoryId: ID!,
    name: String!
}
`
