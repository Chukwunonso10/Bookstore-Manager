const { MongoClient } = require('mongodb')
const uri = 'mongodb://localhost:27017'
const client = new MongoClient(uri)


async function connection(){
    await client.connect()
    console.log(`connected`)
    return client.db('bookStore').collection('books')  

}

module.exports = connection;