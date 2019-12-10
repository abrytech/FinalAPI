import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    inventory(id: ID!): Inventory
    inventorys:[Inventory!]!
}
extend type Mutation{
  addInventory(stockStatus: String, outOfStock: Boolean, soldIndividually:Boolean, productId: ID): Inventory
  updateInventory(id: ID!, data: InventoryInput!): Inventory 
  deleteInventory(id: ID!): Boolean
  deleteInventoryByWhere(where: WhereInventorys!): Boolean
}
type Inventory{
    id: ID!,
    stockStatus: String,
    outOfStock: Boolean,
    soldIndividually: Boolean
    productId: Product,
}
input WhereInventorys{
    stockStatus: String,
    outOfStock: Boolean,
    soldIndividually:Boolean,
    productId: ID
}
input InventoryInput{
    stockStatus: String,
    outOfStock: Boolean,
    soldIndividually:Boolean,
    productId: ID
}
`
