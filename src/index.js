import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import resolvers from './schemas/resolvers'
import typeDefs from './schemas/typeDefs'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import { APP_PORT, IN_PROD, DB_HOST, ACCESS_TOKEN_SECRET_KEY } from './config'
import { verify } from 'jsonwebtoken'
(async () => {
  try {
    const app = express()
    app.use(helmet())
    app.disable('x-powered-by')
    app.use(express.urlencoded({ extended: true }))
    app.use(cookieParser())
    app.use((req, _, next) => {
      const accesstoken = req.cookies['access-token']
      try {
        const data = verify(accesstoken, ACCESS_TOKEN_SECRET_KEY)
        req.userId = data.userId
      } catch {}
      next()
    })
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      playground: IN_PROD ? false : {
        settings: {
          'request.credentials': 'include'
        }
      },
      context: ({ req, res }) => ({ req, res })
    })
    server.applyMiddleware({ app, cors: false })

    app.listen({ port: APP_PORT }, () =>
      console.log(`======> 🚀 Server ready at http://${DB_HOST}:${APP_PORT}${server.graphqlPath} <=====`)
    )
  } catch (error) {
    throw new Error(error)
  }
})()
