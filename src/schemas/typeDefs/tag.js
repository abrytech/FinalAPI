import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    tag(id: ID!): Tag
    tags:[Tag!]!
}
extend type Mutation{
  addTag(name: String!): Tag
  updateTag(id: ID!, data: TagInput!): Tag 
  deleteTag(id: ID!): Boolean
  deleteTagByWhere(where: WhereTags!): Boolean
}
type Tag{
    id: ID,
    name: String
}
input WhereTags{
  name: String!
}
input TagInput{
    name: String!
}
`
