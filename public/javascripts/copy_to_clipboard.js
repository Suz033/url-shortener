const copyBtn = document.querySelector('#copy-btn')

copyBtn.addEventListener('click', function () {
  const copyTarget = copyBtn.value

  navigator.clipboard.writeText(copyTarget)
    .then(() => {
      console.log('Short URL is copied to clipboard')
    })
    .catch(err => {
      console.error('Could not copy URL: ', err)
    })
})