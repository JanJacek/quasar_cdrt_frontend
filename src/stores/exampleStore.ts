/* imports */
// libraries
import { defineStore } from 'pinia';
import { io, Socket } from 'socket.io-client';
import { SocketIOProvider } from 'y-socket.io';
import * as Y from 'yjs';
// utils
// types
// stores
// components

/* script*/
const serverURL = 'http://localhost:3000';
export const exampleStore = defineStore('counter', {
  state: (): {
    ydoc: Y.Doc;
    socket: Socket;
    provider: SocketIOProvider | null;
  } => ({
    ydoc: new Y.Doc(),
    socket: io(serverURL),
    provider: null,
  }),
  getters: {},
  actions: {
    runProvider() {
      this.provider = new SocketIOProvider(serverURL, '2023', this.ydoc, {
        autoConnect: true,
      });
      // this.provider.on('status', ({ status }: { status: string }) => {
      //   console.log(status); // Logs "connected" or "disconnected"
      // });
    },
  },
});
