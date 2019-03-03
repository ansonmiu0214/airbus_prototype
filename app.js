const express = require('express')
const http = require('http')
const path = require('path')

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)
const PORT = process.env.PORT || 8080

var announcement = false

app.get('/buckle', (req, res) => {
  if (announcement) {
    res.sendStatus(503)
    return  
  }

  if (!req.query.seat) {
    res.send('no seat for buckle')
    return
  }

  io.emit('buckle', req.query.seat)
  res.send('Buckle emitted')
})

app.get('/unbuckle', (req, res) => {
  if (announcement) {
    res.sendStatus(503)
    return  
  }

  if (!req.query.seat) {
    res.send('no seat for unbuckle')
    return
  }

  io.emit('unbuckle', req.query.seat)
  res.send('Unbuckle emitted')
})

app.get('/toggle', (req, res) => {
  if (announcement) {
    res.sendStatus(503)
    return  
  }

  if (!req.query.seat) {
    res.send('no seat for unbuckle')
    return
  }

  io.emit('toggle', req.query.seat)
  res.send('Toggle emitted')
})

app.get('/init', (req, res) => {
  if (announcement) {
    res.sendStatus(503)
    return  
  }

  const { seat, buckled } = req.query
  if (!seat || !buckled) {
    res.send('no initial state sent')
    return
  }

  io.emit('init', { seat: seat, buckled: buckled })
  res.send('State emitted') 
})

app.get('/announceStart', (req, res) => {
  if (!announcement) announcement = true
  res.send('Announcement started')
  io.emit('announce', true)
})

app.get('/announceStop', (req, res) => {
  if (announcement) announcement = false
  res.send('Announcement stopped')
  io.emit('announce', false)
})


app.use('/', express.static(path.join(__dirname, 'public/')))

server.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
