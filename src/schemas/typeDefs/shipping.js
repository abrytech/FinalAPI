import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    shipping(id: ID!): Shipping
    shippings:[Shipping!]!
    whereShippings(where: WhereShippings!):[Shipping!]!
}
extend type Mutation{
  addShipping(weight: Float!, length: Float!, width: Float!, height: Float!, class: String, productId: ID!): Shipping
  updateShipping(id: ID!, data: ShippingInput!): Shipping 
  deleteShipping(id: ID!): Boolean
  deleteShippingByWhere(where: WhereShippings!): Boolean
}
type Shipping{
    id: ID,
    weight: Float,
    length: Float,
    width: Float,
    height: Float,
    class: String,
    productId: Product
}
input WhereShippings{
    weight: Float,
    length: Float,
    width: Float,
    height: Float,
    class: String,
    productId: ID
}
input ShippingInput{
    weight: Float,
    length: Float,
    width: Float,
    height: Float,
    class: String,
    productId: ID
}
`
