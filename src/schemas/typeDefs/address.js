import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    address(id: ID!): Address
    addresses:[Address!]!
}
extend type Mutation{
  addAddress(address: String!,city: String!, state: String!, country:String!, postalCode: String, gridPosition: String, userId: ID!): Address
  updateAddress(id: ID!, data: AddressInput!): Address 
  deleteAddress(id: ID!): Boolean
  deleteAddressByWhere(where: WhereInputs!): Boolean
}
type Address{
    id: ID!,
    address: String!,
    city: String!,
    state: String!,
    country: String!,
    postalCode: String,
    gridPosition: String,
    userId: User,
    createdAt: String
}
input WhereInputs{
  address: String!,
  city: String!,
  state: String!,
  country: String!,
  postalCode: String,
  userId: UserInput,
  createdAt: String,
  updatedAt: String
}
input AddressInput{
    address: String,
    city: String,
    state: String,
    country: String,
    postalCode: String,
    gridPosition: String,
    userId: ID,
}
`
