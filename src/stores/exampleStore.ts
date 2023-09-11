import { defineStore } from 'pinia';
import { io, Socket } from 'socket.io-client';
const serverURL = 'http://localhost:3000';
export const exampleStore = defineStore('counter', {
  state: (): {
    socket: Socket;
  } => ({
    socket: io(serverURL),
  }),
  getters: {},
  actions: {},
});
