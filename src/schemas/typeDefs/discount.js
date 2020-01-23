import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    discount(id: ID!): Discount
    discounts:[Discount!]!
}
extend type Mutation{
  addDiscount(discount: Float!, startDate: String, endDate: String, saleQuantity: Int, soldQuantity: Int): Discount
  updateDiscount(id: ID!, data: DiscountInput!): Discount 
  deleteDiscount(id: ID!): Boolean
}
type Discount{
    id: ID,
    discount: Float, 
    startDate: String, 
    endDate: String, 
    saleQuantity: Int, 
    soldQuantity: Int
}
input DiscountInput{
    discount: Float, 
    startDate: String, 
    endDate: String, 
    saleQuantity: Int, 
    soldQuantity: Int
}
`
