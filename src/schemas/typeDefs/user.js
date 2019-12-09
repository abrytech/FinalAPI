import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    user(id: ID!): User
    users:[User!]!
}
extend type Mutation{
  addUser(firstName: String!, lastName: String!, displayName: String, email: String!, username: String!, password:String!, gender: String!, phoneNo: String, userImage: String): User
  updateUser(id: ID!, data: UserInput!): User
  deleteUser(id: ID!): Boolean
}

input UserInput{
  firstName: String,
  lastName: String,
  displayName: String,
  email: String,
  username: String,
  password:String,
  gender: String,
  phoneNo: String,
  userImage: String
}

type User{
  id: ID,
  firstName: String,
  lastName: String,
  displayName: String,
  email: String,
  username: String,
  password:String,
  gender: String,
  phoneNo: String,
  userImage: String,
  createdAt: String,
  updatedAt: String
}
`
