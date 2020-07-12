const { MongoClient } = require('mongodb');
const { url, dbName } = require('../config/db');

const client = new MongoClient(url, { useUnifiedTopology: true });

client.connect()
  .then(() => console.log('Connected successfully to the database'))
  .catch((err) => console.log(`Unable to connect to the database \n${err}`));

const db = client.db(dbName);

module.exports = {
  db
};