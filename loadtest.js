const loadtest = require('loadtest')

function statusCallback(error, result, latency) {
    console.log('<----');
    console.log('Current latency %j', latency.meanLatencyMs);
    // , result %j, error %j', latency, result, error);
    console.log('Request elapsed milliseconds: ', result.requestElapsed);
    console.log('Request index: ', result.requestIndex);
    console.log('Request loadtest() instance index: ', result.instanceIndex);
    console.log('-->');
}

const options = seatId => {
  return {
    url: `https://sheltered-citadel-43963.herokuapp.com/toggle?seat=${seatId}`,
    maxRequests: 100,
    statusCallback: statusCallback
  }
}

const cols = ['A', 'B', 'C', 'D', 'E', 'F']

function getSeats() {
  const seats = []
  for (let i = 1; i <= 30; ++i) {
    for (let j = 0; j < 6; ++j) {
      seats.push(String(i) + cols[j])
    }
  }
  return seats
}

const seats = getSeats()
// const seats = ['1A', '2B', '3C', '4D', '5E', '6F', '7A', '8B', '9C', '10D', '11E', '12F']

seats.map(seat => {
  loadtest.loadTest(options(seat), (err, res) => {
    if (err) return console.error(`Seat ${seat} error: ${err}`)
    console.log(`Tests for seat ${seat} success`)
  })
})
