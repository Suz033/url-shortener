function copyToClipboard(copyTarget) {
  navigator.clipboard.writeText(copyTarget)
    .then(() => {
      console.log('Short URL is copied to clipboard')
    })
    .catch(err => {
      console.error('Could not copy URL: ', err)
    })
}