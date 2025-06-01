const connection = require('./db/db')
const {addBook, readBook, updateBook, deleteBook} = require('./books')


const command = process.argv[2]

if (command === 'create'){
    const [ title, price] = process.argv.slice(3)
    if (!title || !price){
        console.log(`price and title fields are essential`)
        return
    }
    addBook({ title, price: parseInt(price)})
}
else if (command === 'read'){
    readBook()
}
else if (command === 'update'){
    const [id, field, value ] = process.argv.slice(3)
    updateBook(id, {[field]: isNaN(value) ? value : parseInt(value)})
}
else if (command === 'delete'){
    const [id] = process.argv.slice(3)
    deleteBook(id)
    }