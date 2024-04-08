const express = require('express')
const axios = require('axios')
const {lastNames, firstNames} = require('./utils/info')
const dotenv = require('dotenv')
const { generateDate, calculateAge } = require('./utils/dateGeneration')
const generateRandomNumber = require('./utils/numberGeneration')
dotenv.config()


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', async (req, res) => {
    try {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
        const generatedUser = {
            gender: firstName.gender,
            name: {
                title: firstName.gender === "male"? "Mr": "Mrs",
                first: firstName.name,
                last: lastName
            },
            dob: {
                date: generateDate()
            },
            phone: generateRandomNumber(),
            location: {},
            info: {
                results: 1,
                page: 1,
                version: '1.4'
            }
        }
        generatedUser.dob.age = calculateAge(generatedUser.dob.date)
        generatedUser.email = `${generatedUser.name.first.toLowerCase()}.${generatedUser.name.last.toLowerCase()}@example.com`
        return res.json([generatedUser])

    } catch (error) {
        console.log(error)
    }
})

app.get('/:id', async (req, res) => {
    const results = []
    try {
        for (let i = 1; i <= req.params.id; i++) {
            const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
            const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
            const generatedUser = {
                gender: firstName.gender,
                name: {
                    title: firstName.gender === "male"? "Mr": "Mrs",
                    first: firstName.name,
                    last: lastName
                },
                dob: {
                    date: generateDate()
                },
                location: {},
                info: {
                    results: +req.params.id,
                    page: 1,
                    version: '1.4'
                }
            }

            generatedUser.email = `${generatedUser.name.first.toLowerCase()}.${generatedUser.name.last.toLowerCase()}@example.com`
            results.push(generatedUser)
        }

        console.log(results)
        return res.json(results)
    } catch (error) {
        console.log(error)
    }
})


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

