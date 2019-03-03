const express = require('express')
const http = require('http')
const path = require('path')

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)
const PORT = process.env.PORT || 8080

app.get('/buckle', (req, res) => {
  if (!req.query.seat) {
    res.send('no seat for buckle')
    return
  }

  io.emit('buckle', req.query.seat)
  res.send('Buckle emitted')
})

app.get('/unbuckle', (req, res) => {
  if (!req.query.seat) {
    res.send('no seat for unbuckle')
    return
  }

  io.emit('unbuckle', req.query.seat)
  res.send('Unbuckle emitted')
})

app.get('/toggle', (req, res) => {
  if (!req.query.seat) {
    res.send('no seat for unbuckle')
    return
  }

  io.emit('toggle', req.query.seat)
  res.send('Toggle emitted')
})


app.use('/', express.static(path.join(__dirname, 'public/')))

server.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
