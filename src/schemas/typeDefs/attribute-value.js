import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    attributeValue(id: ID!): AttributeValue
    attributeValues:[AttributeValue!]!
}
extend type Mutation{
  addAttributeValue(attributeId: ID!, value: String!): AttributeValue
  updateAttributeValue(id: ID!, data: AttributeValueInput!): AttributeValue 
  deleteAttributeValue(id: ID!): Boolean
  deleteAttributeValueByWhere(where: WhereAttributeValues!): Boolean
}
type AttributeValue{
    id: ID!,
    attributeId: Attribute!,
    value: String!
}
input WhereAttributeValues{
    attributeId: ID!,
    value: String!
}
input AttributeValueInput{
    attributeId: ID!,
    value: String!
}
`
