<script setup>
import {useCounterStore} from '@/stores/counterStore.js';
let counter = useCounterStore();
</script>

<template>
  <div class="counter">
    <h1>This is an counter page {{ counter.count }}</h1>

    <button :disabled="!counter.allowed" @click="counter.increment()">Increment ({{ counter.remaining }})</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .counter {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>