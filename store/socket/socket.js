import create from "zustand";
import io from "socket.io-client";
const ENDPOINT = "http://134.209.239.1";

const store = (set) => ({
  socket: io(ENDPOINT),
  join: (socket, name, room) => {
    socket.emit("join", { name, room }, (error) => {});
  },
  disconnect: (socket) => {
    socket.emit("disconnectRes");
    socket.off();
  },
});
export const socketProvider = create(store);
