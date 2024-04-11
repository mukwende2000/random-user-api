const { lastNames, firstNames } = require('../utils/info')
const { generateDate, calculateAge } = require('../utils/dateGeneration')
const generateRandomNumber = require('../utils/numberGeneration')
const pictures = require('../utils/pictures')

const generateUsers = async(req, res) => {
    req.query.results = req.query.results || '1'
    const { results } = req.query
    const data = {}
    const resultsArray = []
    let count = 18

    try {
        if(req.query.results > 18) {
            return res.json("Can only send 18 users at a time")
        }
        for (let i = 1; i <= results; i++) {
            const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
            const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]

            count = count - 1
            const randomNumber = Math.floor(Math.random() * count) + 1
            const picture = pictures.splice(randomNumber, 1)[0]

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
                picture,
            }

            generatedUser.dob.age = calculateAge(generatedUser.dob.date)
            const { name:{first, last} } = generatedUser
            generatedUser.email = `${first.toLowerCase()}.${last.toLowerCase()}@example.com`
            resultsArray.push(generatedUser)
        } 
        data.results = resultsArray
        data.info = {results: +results, page: 1, version: '1.4'}
        return res.json(data)       
    } catch (error) {
        console.log(error)
                
    }
}

module.exports = { generateUsers }