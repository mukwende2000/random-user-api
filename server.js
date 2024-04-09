const express = require('express')
const dotenv = require('dotenv')
dotenv.config()


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', require('./routes/generateUserRoute'))

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

