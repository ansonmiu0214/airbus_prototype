const express = require('express')
const http = require('http')
const path = require('path')

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)
const PORT = process.env.PORT || 8080


app.get('/buckle', (req, res) => {
  io.emit('buckle')
  res.send('Buckle emitted')
})

app.get('/unbuckle', (req, res) => {
  io.emit('unbuckle')
  res.send('Unbuckle emitted')
})

app.use('/', express.static(path.join(__dirname, 'public/')))

server.listen(PORT, () => console.log(`Listening on port ${PORT}...`))