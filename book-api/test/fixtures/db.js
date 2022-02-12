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
    // _id: new mongoose.Types.ObjectId(),
    title: "book1",
    description: 'First book',
    author: userOne._id,
    rating: 2
}
const bookTwo = {
    _id: "62077c5afe1d9a797671ea69",
    title: "book2",
    description: 'second book',
    author: userOne._id,
    rating: 2
}
const bookThree = {
    _id: "32077c5afe1d9a797671ea63",
    title: "book3",
    description: 'third book',
    author: userOne._id,
    rating: 5
}
const bookWithNoTitle = {
    description: 'First book',
    author: userOne._id,
    rating: 2
}
const bookWithNegativeRating = {
    title: "book2",
    description: 'First book',
    author: "author 2",
    rating: -3
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Book.deleteMany()
    await new User(userOne).save()
    await new Book(bookOne).save()
    await new Book(bookTwo).save()
    await new Book(bookThree).save()
    
}

module.exports = {
    userOneId,
    userOne,
    bookOne,

    bookWithNoTitle,
    bookWithNegativeRating,
    setupDatabase
}


