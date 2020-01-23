import { gql } from 'apollo-server-express'
export default gql`
extend type Query{
    review(id: ID!): Review
    reviews:[Review!]!
}
extend type Mutation{
  addReview(rating: Float! review: String!, productId: ID!, parentId: ID,userId: ID!): Review
  updateReview(id: ID!, data: ReviewInput!): Review 
  deleteReview(id: ID!): Boolean
  deleteReviewByWhere(where: WhereReview!): Boolean
}
type Review{
    id: ID!,
    rating: Float,
    review: String,
    parentId: Review,
    productId: Product,
    userId: User
}
input WhereReview{
    rating: Float,
    review: String,
    parentId:ID,
    productId:ID,
    userId: ID
}
input ReviewInput{
    rating: Float,
    review: String,
    parentId:ID,
    productId:ID,
    userId: ID
}
`
