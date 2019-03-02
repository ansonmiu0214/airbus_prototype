const socket = io()

// const seatId = '6A'
const buckledClass = 'buckled'
// const seat = document.getElementById(seatId).parentElement

socket.on('buckle', id => {
  console.log('buckle event received')

  const seat = document.getElementById(id).parentElement 

  if (!seat.classList.contains(buckledClass)) seat.classList.add(buckledClass)

})

socket.on('unbuckle', id => {
  console.log('buckle event received')

  const seat = document.getElementById(id).parentElement 

  if (seat.classList.contains(buckledClass))
    seat.classList.remove(buckledClass)
})