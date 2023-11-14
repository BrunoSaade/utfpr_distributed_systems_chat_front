// socket.js
import io from 'socket.io-client';

// Create the socket connection
const socket = io('http://localhost:8080', {
  transports: ["websocket"],
  query: { token: window.localStorage.getItem('token') },
  autoConnect: true
});

// Event handlers or any other socket-related logic can be added here

// Log successful connection
socket.on('connect', () => {
  console.log("Socket connection established");
});

// Log connection error
socket.on('connect_error', (error) => {
  console.log("Socket connection error", error);
});

// Log generic error
socket.on('error', () => {
  console.log("Socket connection error");
});

// Export the socket instance directly
export default socket;
