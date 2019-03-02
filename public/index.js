const socket = io()

const seatId = '6A'
const buckledClass = 'buckled'
const seat = document.getElementById(seatId).parentElement

socket.on('buckle', () => {
  console.log('buckle event received')

  if (!seat.classList.contains(buckledClass)) seat.classList.add(buckledClass)

})

socket.on('unbuckle', () => {
  console.log('buckle event received')

  if (seat.classList.contains(buckledClass))
    seat.classList.remove(buckledClass)
})