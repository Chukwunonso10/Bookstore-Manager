const connection = require('./db/db')
const {ObjectId} = require('mongodb')

//performing the crud operations

//create
async function addBook(book){
    const books = await connection()
    const result = await books.insertOne(book)
    console.log(`books added: ${result.insertedId}`)
}
//addBook([{id:1,title: 'game of thrones', price: 450 }])

//read
async function readBook(){
    const books = await connection()
    const result = await books.find().toArray()
    console.log('Your books: ',result)
}
//readBook()

//update
async function updateBook(id, updates){
    const books = await connection()
    const result = await books.updateOne({_id: new ObjectId(id)},{$set: updates})
    console.log(`updated Books: `,result)
}
//updateBook('683b77069a774fbc62363a1d','wonderfule' )

async function deleteBook(id){
    const books = await connection()
    const result = await books.deleteOne({_id: new ObjectId(id)})
    console.log(`book deleted successfully: ${result.deletedCount}`)
}
//deleteBook('683b77069a774fbc62363a1d')


module.exports = {addBook, readBook, updateBook, deleteBook};