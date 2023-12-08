<script setup>
import {ref} from 'vue';
import TheWelcome from '../components/TheWelcome.vue';

let message = ref('Hello World!');
let message2 = ref('Hello World!');

let doSomething = () => {
  alert();
};
</script>

<template>
  <main>
    <TheWelcome />

    <span>{{ message }}</span><br>
    <input class="text" v-model="message" /><br><br>
    <button @click="doSomething()"> click me!</button>
  </main>
</template>
