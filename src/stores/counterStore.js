/*import { reactive } from 'vue';

export let counter = reactive({
    //state
    count: 0,

    //action
    increment(){
        this.count++;
    }
});*/

// ----------- Pinia functionality -----------
import { defineStore } from "pinia";

export let useCounterStore = defineStore('counter', {

    //data
    state(){
        return{
            count: 0,
            maxCount: 10,
            allowed: true
        };
    },

    //methods
    actions:{
        increment(){
            this.validate();

            if(this.count < this.maxCount){
                this.count++;
            }
        },

        validate(){
            if(this.count > this.maxCount){
                this.count = this.maxCount;
                this.allowed = false;
            }
            else{
                this.allowed = true;
            }
        }
    },

    //computed properties
    getters:{
        remaining(){
            return this.maxCount-this.count;
        }
    }
});