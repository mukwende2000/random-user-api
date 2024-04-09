const {lastNames, firstNames} = require('../utils/info')
const { generateDate, calculateAge } = require('../utils/dateGeneration')
const generateRandomNumber = require('../utils/numberGeneration')
const pictures = require('../utils/pictures')

const generateUsers = async (req, res) => {
    const results = []
    let count = 18
    try {
        for (let i = 1; i <= req.params.id; i++) {
            const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
            const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]

            count = count - 1
            const randomNumber = Math.floor(Math.random() * count) + 1
            // const picture = pictures.filter((picture) => picture.includes(`/${randomNumber}.`))[0]
           const picture = pictures.splice(randomNumber, 1)[0]
            console.log(pictures)

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