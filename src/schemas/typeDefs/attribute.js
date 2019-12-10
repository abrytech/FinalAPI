import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    attribute(id: ID!): Attribute
    attributes:[Attribute!]!
}
extend type Mutation{
  addAttribute(name: String!): Attribute
  updateAttribute(id: ID!, data: AttributeInput!): Attribute 
  deleteAttribute(id: ID!): Boolean
  deleteAttributeByWhere(where: WhereAttributes!): Boolean
}
type Attribute{
    id: ID!
    name: String!
}
input WhereAttributes{
  name: String!
}
input AttributeInput{
    name: String!
}
`
