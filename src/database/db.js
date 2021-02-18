const { Pool, Client } = require('pg')

const pool = new Pool({
	'user': 'postgres',
	'host': 'localhost',
	'database': 'twit',
	'password': '11235',
	'port': 5432
})

const fetch = async (SQL, ...params) => {

	const client = await pool.connect()
	console.log('connect to database...')

	try {
		const result = await client.query(SQL, params)

		return result.rows		
	} catch(e) {
		console.log(e.message);
	} finally {
		client.release()
		console.log('disconnect from database')
	}
}

module.exports.fetch = fetch
