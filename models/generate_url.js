// files
const UrlModel = require('./url')


// function
function generateGarbledCode(length = 5) {
  const garbledCodeLength = length

  // garbled code type
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = '0123456789'

  const collection = lowerCaseLetters.concat(upperCaseLetters).concat(numbers)

  let garbledCode = ''

  // unrepeated code
  while (garbledCode.length < garbledCodeLength) {
    let randomIndex = Math.floor(Math.random() * collection.length)
    if (!garbledCode.includes(collection[randomIndex])) {
      garbledCode += collection[randomIndex]
    }
  }

  return garbledCode

}

function generateShortenedUrl(originalUrl) {
  const hostUrl = 'http://localhost:3000/'
  const shortenedUrl = hostUrl + generateGarbledCode()
  console.log(shortenedUrl)
}


console.log(generateGarbledCode())


// export function
module.exports = generateGarbledCode