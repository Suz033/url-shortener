// click the shorten button without entering anything
const shortenBtn = document.querySelector('#shorten-btn')
shortenBtn.addEventListener('click', function (event) {
  const urlInput = document.querySelector('#url-input').value
  if (urlInput.length === 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Please enter a valid URL'
    })
  }
})

// click the reset button
const resetBtn = document.querySelector('#reset-btn')
resetBtn.addEventListener('click', function (event) {
  event.preventDefault()
  Swal.fire({
    title: 'Reset the page?',
    text: "The page will be reloaded.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#716add',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      location.href = "/"
    }
  })
})

// click the copy button
const copyBtn = document.querySelector('#copy-btn')
copyBtn.addEventListener('click', function (event) {
  event.preventDefault()
  const copyTarget = document.querySelector('#copy-btn').value

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 2000,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: 'success',
    title: 'Short URL is copied to clipboard.'
  })
  copyToClipboard(copyTarget)
})