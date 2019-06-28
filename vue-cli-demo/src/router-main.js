import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueResource from 'vue-resource'


Vue.config.productionTip = false;

Vue.use(VueResource);

new Vue({
    router:router,
    render: h => h(App), /** 相当于render:function(createElement){createElement(App)}**/
    watch: {
        '$route':function(to, from) {
            /*console.info(to);
            console.info(from);*/
        }
    }
}).$mount('#app');
