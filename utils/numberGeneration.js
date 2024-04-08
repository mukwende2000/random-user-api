function generateRandomNumber() {
    const countryCode = '+260'
    const MNCs = ['97', '96', '95', '77', '76', '75']
    const MNC = MNCs[Math.floor(Math.random() * MNCs.length)]
    const subscriberNumber = Math.floor(Math.random() * 9000000) + 1000000

    return `${countryCode}${MNC}${subscriberNumber}`
}

module.exports = generateRandomNumber