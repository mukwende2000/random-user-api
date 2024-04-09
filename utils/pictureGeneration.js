// const pictures = require('./pictures')
const pictures = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg',
    '/images/8.jpg',
    '/images/9.jpg',
    '/images/10.jpg',
    '/images/11.jpg',
    '/images/12.jpg',
    '/images/13.jpg',
    '/images/14.jpg',
    '/images/15.jpg',
    '/images/16.jpg',
    '/images/17.jpg',
    '/images/18.jpg',
]
function generatePicture() {
    const randomNumber = Math.floor(Math.random() * 18) + 1
    const picture = pictures.filter((picture) => picture.includes(`/${randomNumber}.`))
    pictures.splice(pictures.indexOf(picture[0]), 1)
    console.log(randomNumber)
    // console.log(picture)
    return picture[0]
}
module.exports = { generatePicture }
