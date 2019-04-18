const url = 'https://ws-api.iextrading.com/1.0/last'
const socket = require('socket.io-client')(url)


const subscribeToIEX = (tickers, cb) => {
  socket.on('connect', () => {
    console.log('tickers', tickers)
    socket.emit('subscribe', tickers)
  })

  socket.on('message', message => {
    cb(message)
  })
}
export default subscribeToIEX;
