import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    category(id: ID!): Category
    categorys:[Category!]!
}
extend type Mutation{
  addCategory(parentId: ID!, name: String!, image: String): Category
  updateCategory(id: ID!, data: CategoryInput!): Category 
  deleteCategory(id: ID!): Boolean
  deleteCategoryByWhere(where: WhereCategorys!): Boolean
}
type Category{
    id: ID!,
    parentId: Attribute!,
    name: String!,
    image: String
}
input WhereCategorys{
    parentId: ID,
    name: String,
    image: String
}
input CategoryInput{
    parentId: ID,
    name: String,
    image: String
}
`
