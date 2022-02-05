const mongoose = require('mongoose')
const Book = require('../../src/models/book')
const User = require('../../src/models/user')


const userOneId = new mongoose.Types.ObjectId()

const userOne = {
    _id: userOneId,
    name: 'userExample',
    email: 'user@example.com',
    password: '56what!!'
}
const bookOne = {
    _id: new mongoose.Types.ObjectId(),
    title: "book1",
    description: 'First book',
    author: userOne._id,
    rating: 2
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Book.deleteMany()
    await new User(userOne).save()
    await new Book(bookOne).save()
}

module.exports = {
    userOneId,
    userOne,
    bookOne,
    setupDatabase
}


