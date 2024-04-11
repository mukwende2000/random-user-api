function getRandomNumber(startDigit, endDigit) {
    return Math.floor(Math.random() * startDigit) + endDigit
}

function generateDate() {
    const date = getRandomNumber(12, 1)
    const month = getRandomNumber(31, 1)
    const year = getRandomNumber((2007 - 1944), 1944)
    
    return new Date(`${date}/${month}/${year}`).toLocaleDateString()
}

function calculateAge(dob) {
    return +new Date().toLocaleDateString().split('/')[2] - +dob.split('/')[2]
}

module.exports = { generateDate, calculateAge }