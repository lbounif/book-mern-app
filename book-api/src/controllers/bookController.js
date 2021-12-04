const Book = require("../models/book")

// Add a new book
const addBooks = async(req, res) => {
    console.log(req.body)
    const book = new Book(req.body)
    try {
        //save book to DB
        let result = await book.save()
        //send success response to client
        res.status(201).json({
            message: "Book created successfully",
            data: result
        })
    } catch(err){
        console.log(`Error is: ${err}`)
        //send error response to client
        res.status(500).json({
            message: "Intrenal server error",
            data: {}
        })
    }
}
//get all books
const getBooks = async(req, res) => {
   
    try {
        const books = await Book.find()
        console.log("books: ", books)
        res.status(200).json({
            message: "Books found successfully",
            data: books
        })
    } catch(err){
        console.log(`Error is: ${err}`)
        //send error response to client
        res.status(500).json({
            message: "Intrenal server error",
            data: {}
        }) 
    }
}

//find a book by id
const getBookById = async (req, res) => {
    console.log(req)
    const id = req.params.id
    try {
        const book = await Book.findById(id)
        if(!book) {
            res.status(404).json({
                message: "Book not found ",
                data: {}
            })
        }
        res.status(200).json({
            message: "Book found successfully",
            data: book
        })
    } catch(err){
        console.log(`Error is: ${err}`)
        //send error response to client
        res.status(500).json({
            message: "Intrenal server error",
            data: {}
        }) 
    }
}
//update a book by id
const updateBook = async(req, res) => {
    const id = req.params.id
    try {
        const book = await Book.findById(id)
        if(!book) {
            res.status(404).json({
                message: "Book not found ",
                data: {}
            })
        }
        //update book
        const bookUpdated= await Book.updateOne({_id:id}, {...req.body})
        res.status(200).json({
            message: "Book updated successfully",
            data: bookUpdated
        })
    } catch(err){
        console.log(`Error is: ${err}`)
        //send error response to client
        res.status(500).json({
            message: "Intrenal server error",
            data: {}
        }) 
    }
}
const deleteBook = async(req, res) => {
    const id = req.params.id
    if(!id) res.status(400).json({
        message: "Bad parameter",
        data: {}
    })
    try {
        const book = await Book.findById(id)
        if(!book) {
            res.status(404).json({
                message: "Book not found ",
                data: {}
            })
        }
        //update book
        const bookDeleted= await Book.deleteOne({_id:id})
        res.status(200).json({
            message: "Book deleted successfully",
            data: bookDeleted
        })
    } catch(err){
        console.log(`Error is: ${err}`)
        //send error response to client
        res.status(500).json({
            message: "Intrenal server error",
            data: {}
        }) 
    }
}
module.exports = {
    addBooks,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
}