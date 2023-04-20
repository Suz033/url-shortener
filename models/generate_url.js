// function
function generateGarbledCode(originalUrl) {
  const garbledCodeLength = 5

  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'

  let collection = lowerCaseLetters.concat(numbers)

  let garbledCode = ''

  // unrepeated code
  while (garbledCode.length < garbledCodeLength) {
    let randomIndex = Math.floor(Math.random() * collection.length)
    if (!garbledCode.includes(collection[randomIndex])) {
      garbledCode += collection[randomIndex]
    }
  }

  console.log(garbledCode)

}

generateGarbledCode()

// export function
module.exports = generateGarbledCode