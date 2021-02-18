const { gql } = require('apollo-server-express')

module.exports = gql`
	scalar Response

	extend type Query {
		users: [User]!
	}

	extend type Mutation {
		user(username: String! password: String! fullname: String): Response
	}

	type User {
		id: Int!
		username: String!
		password: String!
		fullname: String!
	}
`
