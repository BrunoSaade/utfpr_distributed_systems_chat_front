// socket.js
import io from 'socket.io-client';

const socket = {
  instance: null,
  init() {
    this.instance = io('http://localhost:8080', {
      transports: ["websocket"],
      query: { token: window.localStorage.getItem('token') },
      autoConnect: true
    });

    this.instance.on('connect', () => {
      console.log("Socket connection established");
    });

    this.instance.on('connect_error', (error) => {
      console.log("Socket connection error", error);
    });

    this.instance.on('error', () => {
      console.log("Socket connection error");
    });
  },
  on(event, handler) {
    if (this.instance) {
      this.instance.on(event, handler);
    }
  },
  off(event, handler) {
    if (this.instance) {
      this.instance.off(event, handler);
    }
  },
  emit(event, data) {
    if (this.instance) {
      this.instance.emit(event, data);
    }
  },
};

export default socket;
