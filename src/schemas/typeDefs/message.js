import { gql } from 'apollo-server-express'
export default gql`
type Message{
    messageType: String,
    message: String
}
`
