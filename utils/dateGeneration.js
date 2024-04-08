function getRandomNumber(startDigit, endDigit) {
    return Math.floor(Math.random() * startDigit) + endDigit
}

function generateDate() {
    return (new Date (`${getRandomNumber(12, 1)}/${getRandomNumber(31, 1)}/${getRandomNumber((2007 - 1944), 1944)}`).toLocaleDateString())
}

function calculateAge(dob) {
    return +new Date().toLocaleDateString().split('/')[2] - +dob.split('/')[2]
}

module.exports = { generateDate, calculateAge }