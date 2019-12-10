import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    address(id: ID!): Address
    addresses:[Address!]!
}
extend type Mutation{
  addAddress(address_line_1: String!, address_line_2: String, city: String!, country: String!, stateCounty: String!, map: String, vendorId: ID, userId: ID): Address
  updateAddress(id: ID!, data: AddressInput!): Address 
  deleteAddress(id: ID!): Boolean
  deleteAddressByWhere(where: WhereAddresses!): Boolean
}
type Address{
    id: ID!,
    address_line_1: String!,
    address_line_2: String,
    city: String!,
    country: String!,
    stateCounty: String!,
    map: String,
    userId: User,
    vendorId: Vendor
}
input WhereAddresses{
  address_line_1: String!,
  address_line_2: String,
  city: String!,
  country: String!,
  stateCounty: String!,
  map: String,
  createdAt: String,
  updatedAt: String
}
input AddressInput{
    address_line_1: String!,
    address_line_2: String,
    city: String!,
    country: String!,
    stateCounty: String!,
    map: String,
    vendorId: ID,
    userId: ID
}
`
