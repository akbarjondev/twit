const http = require('http')
const express = require('express')
const modules = require('./src/modules/')
const CONFIG = require('./src/config/config.js')
const { ApolloServer } = require('apollo-server-express')

const server = new ApolloServer({ 
	modules,
	context: ({ req }) => ({token: req.headers.token}) 
})

const app = express()
server.applyMiddleware({ app, path: '/graphql' })
const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port: CONFIG.PORT }, () => console.log(`Ready at http://localhost:${CONFIG.PORT}`))
