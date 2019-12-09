import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    order(id: ID!): Order
    orders:[Order!]!
}
extend type Mutation{
  addOrder(product: ID!, user: ID!, status: String!, quantity: Int!): Order
}
type Order{
    id: ID!,
    product: Product!,
    user: User!,
    status: String!,
    quantity: Int!,
    createdAt: String
}
`
