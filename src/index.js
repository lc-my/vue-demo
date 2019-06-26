import Vue from 'vue'

import { button } from './button'
import { BaseInput } from "./baseInput";
import { BaseInput2} from "./baseInput2";
import { BaseCheckbox } from "./baseCheckbox";

Vue.component('button-counter',button);
Vue.component('base-input',BaseInput);
Vue.component('base-input-2',BaseInput2);
Vue.component('base-checkbox',BaseCheckbox);

new Vue({
    el:'#app',
    data: {
        message: 'Hello Vue!',
        title:'title',
        pro:{
            text: 'base',
            type:'e'
        },
        username:'test',
        check:true
    },
    methods:{
        inputClick:function(){
            console.info(arguments);
        },
        boxChage:function(){
            console.info(arguments);
        }
    }
});