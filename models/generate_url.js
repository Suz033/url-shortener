// files
require('../config/mongoose')
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

async function generateShortenedUrl(HOST_URL) {
  let shortenedUrl = HOST_URL + generateGarbledCode()

  // unrepeated shortened url
  let url = await UrlModel.findOne({ shortenedUrl })
  while (url) {
    shortenedUrl = hostUrl + generateGarbledCode()
    url = await UrlModel.findOne({ shortenedUrl })
  }

  return shortenedUrl
}


// export function
module.exports = generateShortenedUrl