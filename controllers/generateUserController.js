const {lastNames, firstNames} = require('../utils/info')
const { generateDate, calculateAge } = require('../utils/dateGeneration')
const generateRandomNumber = require('../utils/numberGeneration')

const generateUser = async (req, res) => {
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
}

module.exports = generateUser