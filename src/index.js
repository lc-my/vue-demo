import Vue from 'vue'

import { button } from './button'

Vue.component('button-counter',button);
new Vue({
    el:'#app',
    data: {
        message: 'Hello Vue!'
    }
});