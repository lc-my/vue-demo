import Vue from 'vue'

import { button } from './button'
import { BaseInput } from "./baseInput";
import { BaseInput2} from "./baseInput2";
import { BaseCheckbox } from "./baseCheckbox";
import { AlertBox } from './alertBox';
import { MyMixin } from './myMixin';

import { RenderDemo } from './renderDemo';

Vue.component('button-counter',button);
Vue.component('base-input',BaseInput);
Vue.component('base-input-2',BaseInput2);
Vue.component('base-checkbox',BaseCheckbox);
/*Vue.component('alert-box',AlertBox);*/
Vue.component('render-demo',RenderDemo);




new Vue({
    el:'#app',
    components:{
        'alert-box':AlertBox
    },
    data: {
        message: 'Hello Vue!',
        title:'title',
        pro:{
            text: 'base',
            type:'e'
        },
        username:'test',
        check:true,
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



/**mixin**/
/*
var Component = Vue.extend(MyMixin);
var v = new Component();*/


/*
let component = new Vue({
    mixins:[MyMixin],
    data:function(){
        return {
            message:'good',
            bar:'bar'
        }
    },
    created:function(){
        console.info('child created');
        console.info(this.$data.foo);
        console.info(this.$data);
    },
    methods:{
        say:function () {
            console.info('child say');
        }
    }
});
component.say();*/
