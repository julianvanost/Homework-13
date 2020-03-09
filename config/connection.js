const { createConnection } = require('mysql2')

let connection;

if (process.env.JAWSDB_URL) {
  connection = createConnection(process.env.JAWSDB_URL)
}
else {
  connection = createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rootroot',
    database: 'burger_db'
  })
}
module.exports = connection