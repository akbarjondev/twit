const { gql } = require('apollo-server-express')

module.exports = gql`
	extend type Query {
		users: [User]!
	}

	type User {
		id: Int!
		username: String!
		password: String!
		fullname: String!
	}
`
