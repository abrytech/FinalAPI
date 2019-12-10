import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    user(id: ID!): User
    users:[User!]!,
    whereUsers(where: UserInput!):[User!]!
}
extend type Mutation{
  addUser(firstName: String!, lastName: String!, displayName: String, email: String!, username: String!, password:String!, gender: String!, phoneNo: String, userImage: String, activationKey: String, deleted: Boolean, spam: Boolean): User
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
  activationKey: String,
  deleted: Boolean,
  spam: Boolean
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
  activationKey: String,
  deleted: Boolean,
  spam: Boolean,
  createdAt: String,
  updatedAt: String
}
`
