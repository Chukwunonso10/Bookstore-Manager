## BookStore CLI Application
A lightweight Command Line Interface (CLI) app built with Node.js and MongoDB that performs CRUD (Create, Read, Update, Delete) operations on a book collection.

## Features

 Add a book with title and price

 List all books in the database

 Update a book field by its ID

 Delete a book by its ID

 Connects to a MongoDB database using the native driver

### 🛠️ Technologies Used
Node.js

Javascript

MongoDB

MongoDB Native Driver

### 📁 Project Structure
.
├── db/
│   └── db.js          # MongoDB connection logic
├── books.js           # CRUD operations
├── server.js          # CLI command parser
└── README.md

## 📦 Installation

## Prerequisites
Node.js installed

MongoDB running locally on mongodb://localhost:27017

1. Clone the Repository
git clone https://github.com/Chukwunonso10/Bookstore-Manager.git

cd Bookstore-Manager

## 2. Install Dependencies
npm install

### 🧪 How to Use
# 1. Start MongoDB
Make sure your MongoDB server is running:
mongod
# 2. Run Commands
✅ Create a Book
node server.js create "The Alchemist" 

# 3 📖 Read All Books

node server.js read

# 4✏️ Update a Book Field
node server.js update <book_id> <field> <value>
Example:

node server.js update 6653f35170e3cc42b1ebf7d2 price 900
node server.js update 6653f35170e3cc42b1ebf7d2 title "Updated Title"

# 5 ❌ Delete a Book
node server.js delete <book_id>
Example:
node server.js delete 6653f35170e3cc42b1ebf7d2

## 🧠 Developer Notes
Ternary Logic in Update
This line:

{ [field]: isNaN(value) ? value : parseInt(value) }
Ensures that:

If value is a number → convert to Number

If value is a string → keep it as String

Helps MongoDB store values in the right format