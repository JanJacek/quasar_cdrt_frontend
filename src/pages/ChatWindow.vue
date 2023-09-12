<template>
  <q-card>
    <q-card-section>
      <y-input />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
/* imports */
// libraries
// utils
// types
// stores
import { exampleStore } from 'src/stores/exampleStore';
// components
import YInput from 'src/components/YInput.vue';

/* script*/
const { runProvider } = exampleStore();
runProvider();
</script>
