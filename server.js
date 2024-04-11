const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
dotenv.config()


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors(corsOptions))

app.use('/', require('./routes/generateUserRoute'))

app.listen(PORT, '0.0.0.0', () => console.log(`Server listening on port ${PORT}`))

