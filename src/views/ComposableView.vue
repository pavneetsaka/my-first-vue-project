<script setup>
import {ref, watch} from 'vue';
import {useFlash} from '@/composables/useFlash';
import {useStorage} from '@/composables/useStorage';
import TabbableTextarea from '../components/TabbableTextarea.vue';
import {useCounterStore} from '@/stores/counterStore.js';

let { flash } = useFlash();
let counter = useCounterStore();
/*let food = ref(localStorage.getItem('food'));
let age = ref(localStorage.getItem('age'));

watch(food, (val) => {
    localStorage.setItem('food', val);
})

let write = (key, value) => {
    localStorage.setItem(key, value);
}*/

let food = useStorage('food');
let age = useStorage('age');
let comment = ref('test value');
</script>

<template>
    <div>
        <button type="button" @click="flash('Composable Alert')">Click me!</button>
        <br>
        <br>
        <p>
            Whats your favorute food? <input type="text" v-model="food" >
        </p>
        <p>
            Whats your age? <input type="text" v-model="age" >
        </p>
        <p>
            Current Count? <input type="text" v-model="counter.count" @input.change="counter.validate()" >
            <div v-if="!counter.allowed"><small style="color:red">Cannot enter more than {{ counter.count }}</small></div>
        </p>
        <br><br>

        <TabbableTextarea v-model="comment" style="width: 100%;height: 300px;" />
    </div>
</template>