import io from 'socket.io-client'
import * as mutation_types from "@/store/types/mutation-types"

let socket = null

export default {
  createConnection: () => {
    const socket_connection = io(
      'ws://0.tcp.sa.ngrok.io:18504',
      {
        transports: ["websocket"],
        query: { token: window.localStorage.getItem('token')},
        autoConnect: true
      }
    )
    
    socket_connection.on('connect', () => {
      console.log("deuBom")
      socket = socket_connection
    })
    socket_connection.on('connect_error', (error) => {
      
      console.log(error)
    })
    socket_connection.on('error', () => {
      console.log("error")
    })

    return socket_connection
  },

  sendNewMessage: (content, chatId) => {
    socket.emit('sendNewMessage', {content: content, chatId: chatId})
  },
  receiveMessage: (response) => {

    return response
  }
}

