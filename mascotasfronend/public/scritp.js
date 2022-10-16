var myModal = document.getElementById('staticBackdrop')
var myInput = document.getElementById('modalI')


myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})