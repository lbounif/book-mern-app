//1. Import express
const express = require("express")
require("./db/mongoose")
const bookRouter = require("./routes/bookRouter")
const cors = require("cors")

//2 Call express function and save it in app
const app = express()
app.use(cors())

app.use(express.json())
app.use(bookRouter)


//3. Define a port
const port = process.env.APP_PORT

//4. Listen to the port
app.listen(port, () => {
    console.log(`Server is up on port: ${port}`)
})