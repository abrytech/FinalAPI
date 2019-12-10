import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    model(id: ID!): Model
    models:[Model!]!
}
extend type Mutation{
  addModel(brandId: ID!, name: String!): Model
  updateModel(id: ID!, data: ModelInput!): Model 
  deleteModel(id: ID!): Boolean
  deleteModelByWhere(where: WhereModels!): Boolean
}
type Model{
    id: ID!,
    brandId: Attribute!,
    name: String!
}
input WhereModels{
    brandId: ID!,
    name: String!
}
input ModelInput{
    brandId: ID!,
    name: String!
}
`
