const socket = io()

const seatId = '6A'
const seat = document.getElementById(seatId).parentElement

socket.on('buckle', () => {
  console.log('buckle event received')

  seat.classList.toggle('buckled')

})

socket.on('unbuckle', () => {
  console.log('buckle event received')

  seat.classList.toggle('buckled')
})