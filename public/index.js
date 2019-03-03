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

socket.on('toggle', id => {
  console.log('buckle event received')

  const seat = document.getElementById(id).parentElement 

  seat.classList.toggle(buckledClass)
})

socket.on('init', params => {
  console.log('init seat received', params)

  const { seat, buckled } = params

  const seat = document.getElementById(id).parentElement 

  if (buckled == 1 && !seat.classList.contains(buckledClass))
    seat.classList.add(buckledClass)

  if (buckled == 0 && seat.classList.contains(buckledClass))
    seat.classList.remove(buckledClass)
})

socket.on('announce', isStart => {
  document.getElementById('title').innerHTML = isStart ? 'Announcement In Progress' : ''
})
