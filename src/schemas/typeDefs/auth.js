import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
  me: User
}
extend type Mutation{
  signUp(fullname: String!,email: String!, password:String!, gender: String!, bio: String, isverified: Boolean): User
  signIn(email: String!, password: String!): User
  signOut: Boolean
}
`
