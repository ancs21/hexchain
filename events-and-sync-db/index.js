const WebSocket = require('ws')
const { DeepstreamClient } = require('@deepstream/client')

const client = new DeepstreamClient('localhost:6020')
client.login()

// console.log(client.getUid())
// // Client A
// client.event.subscribe('news/sports', data => {
//   // handle published data
//   console.log(data)
// })

// // Client B
// client.event.emit('news/sports', 'hello')

const subscribe = {
  action: 'subscribe',
  address_prefixes: ['fc3c28']
}
const ws = new WebSocket('ws://localhost:8008/subscriptions')
ws.onopen = () => {
  ws.send(JSON.stringify(subscribe))
}
ws.onmessage = event => {
  const res = JSON.parse(event.data)
  if (res.block_num !== '0') {
    console.log(res)
  }
}
ws.onclose = () => {
  ws.close()
}
