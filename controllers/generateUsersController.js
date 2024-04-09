const {lastNames, firstNames} = require('../utils/info')
const { generateDate, calculateAge } = require('../utils/dateGeneration')
const generateRandomNumber = require('../utils/numberGeneration')

const generateUsers = async (req, res) => {
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
                phone: generateRandomNumber(),
                location: {},
                info: {
                    results: +req.params.id,
                    page: 1,
                    version: '1.4'
                }
            }

            generatedUser.dob.age = calculateAge(generatedUser.dob.date)
            generatedUser.email = `${generatedUser.name.first.toLowerCase()}.${generatedUser.name.last.toLowerCase()}@example.com`
            results.push(generatedUser)
        }
        return res.json(results)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { generateUsers }