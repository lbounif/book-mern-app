const request = require("supertest")
const app = require('../src/index')
const Book = require('../src/models/book')
const { 
        setupDatabase, 
        bookOne,
        userOne,
        bookWithNoTitle,
        bookWithNegativeRating } = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should fetch books', async () => {
    const response = await request(app)
        .get('/books')
        .send()
        .expect(200)
        console.log(response.body)
        const books = await Book.find()
        console.log(books)
        expect(books.data).not.toBeNull()
})

test('Should add a new book', async () => {
    const response = await request(app)
        .post('/books')
        .send(bookOne)
        .expect(201)
        const book = await Book.findOne({title: bookOne.title})
        expect(book).not.toBeNull()
        expect(book.description).toEqual(response.body.data.description)
})

test('Should not add a new book without title', async () => {
    const response = await request(app)
        .post('/books')
        .send(bookWithNoTitle)
        .expect(500)
})

test('Should not add a rating negative', async () => {
    const response = await request(app)
        .post('/books')
        .send(bookWithNegativeRating)
        .expect(500)
})

test('Should get a book by id', async () => {
    const response = await request(app)
        .get('/books/62077c5afe1d9a797671ea69')
        .send()
        .expect(200)
        console.log("response.body: ",response.body.data)
        const book = await Book.findOne({_id: "62077c5afe1d9a797671ea69"})
        expect(book).not.toBeNull()
        expect(book.title).toEqual('book2')
})

test('Should not get a book by non existing id', async () => {
    const response = await request(app)
        .get('/books/62077c5afe1d9a797671ea61')
        .send()
        .expect(404)
        console.log("response.body: ",response.body.data)
        expect(response.body.data).toEqual({})
})

test('Should not get a book by non ObjectId', async () => {
    const response = await request(app)
        .get('/books/22222222')
        .send()
        .expect(500)
        console.log("response.body: ",response.body.data)
        expect(response.body.data).toEqual({})
})

test('Should update a book by id', async () => {
    const response = await request(app)
        .put('/books/62077c5afe1d9a797671ea69')
        .send({
            _id: "62077c5afe1d9a797671ea69",
            title: "book2 updated",
            description: 'second book updated',
            author: userOne._id,
            rating: 8
        })
        .expect(200)
        console.log("response.body: ",response.body.data)
        const book = await Book.findOne({_id: "62077c5afe1d9a797671ea69"})
        expect(book).not.toBeNull()
        expect(book.title).toEqual('book2 updated')
})

test('Should delete a book by id', async () => {
    const response = await request(app)
        .delete('/books/32077c5afe1d9a797671ea63')
        .send()
        .expect(200)
        console.log("response.body: ",response.body.data)
        const book = await Book.findOne({_id: "32077c5afe1d9a797671ea63"})
        expect(book).toBeNull()
})

test('Should not delete a non existing book', async () => {
    const response = await request(app)
        .delete('/books/32077c5afe1d9a797671ea65')
        .send()
        .expect(404)
        console.log("response.body: ",response.body.data)
        expect(response.body.data).toEqual({})
})