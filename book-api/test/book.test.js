const request = require("supertest")
const app = require('../src/index')
const { setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should fetch books', async () => {
    const response = await request(app)
        .get('/books')
        .send()
        .expect(200)
        // .expect(response.body.data.length).toEqual(1)
        console.log(response.body)
})