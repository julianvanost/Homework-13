const { createConnection } = require('mysql2')

let connection;

if (process.env.JAWSDB_URL) {
  connection = createConnection(process.env.JAWSDB_URL)
} else {
  connection = createConnection({
    host: 'bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'leabyuv2i3214252',
    password: 'mw2zq69e1xo3rhyt',
    database: 'fs80d8hiz016rguz'
  })
}
module.exports = connection
