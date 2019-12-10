import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    variation(id: ID!): Variation
    variations:[Variation!]!
    whereVariations(where: WhereVariations!):[Variation!]!
}
extend type Mutation{
  addVariation(productId: ID, price: Float, salePrice: Float, image: Float, quantity: Int, inventoryId: ID, attributeId: ID, attributeValueId: ID): Variation
  updateVariation(id: ID!, data: VariationInput!): Variation 
  deleteVariation(id: ID!): Boolean
  deleteVariationByWhere(where: WhereVariations!): Boolean
}
type Variation{
  id: ID,
  productId: Product,
  price: Float,
  salePrice: Float,
  image: Float,
  quantity: Int,
  inventoryId: Inventory,
  attributeId: Attribute,
  attributeValueId: AttributeValue
}
input WhereVariations{
  productId: ID,
  price: Float,
  salePrice: Float,
  image: Float,
  quantity: Int
}
input VariationInput{
  productId: ID,
  price: Float,
  salePrice: Float,
  image: Float,
  quantity: Int,
  inventoryId: ID,
  attributeId: ID,
  attributeValueId: ID
}
`
