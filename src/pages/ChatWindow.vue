<template>
  <q-card>
    <q-card-section>
      <q-btn color="grey-8" label="Hello there" @click="socketTest()" />
    </q-card-section>
    <q-card-section>
      <p>{{ kenobi }}</p>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
// imports
import { exampleStore } from 'src/stores/exampleStore';
import { ref } from 'vue';

// script
const { socket } = exampleStore();
const kenobi = ref('');
function socketTest() {
  socket.emit('hello there', (resp: string) => {
    kenobi.value = resp;
  });
}
</script>
