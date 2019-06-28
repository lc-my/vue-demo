import Vue from 'vue'
import App from './App.vue'
import store from './vuex/index'

Vue.config.productionTip = false;



new Vue({
    render: h => h(App), /** 相当于render:function(createElement){createElement(App)}**/
    store
}).$mount('#app');
