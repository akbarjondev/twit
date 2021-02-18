const { fetch } = require('./../../database/db.js')

module.exports = {
	Query: {
		users: async () => {
			try {
				return await fetch('select * from users')
			} catch(e) {
				console.log(e)
				return e.message
			}
		}
	},

	Mutation: {
		user: async (_, { username, password, fullname }) => {
			try {
				return await fetch(
					`insert into
							users(username, password, fullname)
					values($1, $2, $3) 
							returning id, username`,
					username, password, fullname
				)
			} catch(e) {
				console.log(e)
				return e.message
			}
		}
	}
}
