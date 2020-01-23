import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    category(id: ID!): Category
    categories:[Category!]!
}
extend type Mutation{
  addCategory(parentId: ID!, name: String!, image: ImageFileInput): Category
  updateCategory(id: ID!, data: CategoryInput!): Category 
  deleteCategory(id: ID!): Boolean
  deleteCategoryByWhere(where: WhereCategorys!): Boolean
}
type Category{
    id: ID!,
    parentId: ID!,
    name: String!,
    imageId: Int
}
input WhereCategorys{
    parentId: ID,
    name: String,
    imageId: Int
}
input CategoryInput{
    parentId: ID,
    nameId: Int
}
`
