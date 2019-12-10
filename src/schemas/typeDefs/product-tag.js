import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    productTag(id: ID!): ProductTag
    productTags:[ProductTag!]!
}
extend type Mutation{
  addProductTag(productId: ID!, tagId: ID!): ProductTag
  updateProductTag(id: ID!, data: ProductTagInput!): ProductTag 
  deleteProductTag(id: ID!): Boolean
  deleteProductTagByWhere(where: WhereProductTags!): Boolean
}
type ProductTag{
    id: ID,
    productId: Product,
    tagId: Tag
}
input WhereProductTags{
    productId: ID,
    tagId: ID
}
input ProductTagInput{
    productId: ID,
    tagId: ID
}
`
