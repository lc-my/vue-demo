import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/foo',
            component:require('../components/Foo.vue')
        },
        {
            path:'/bar',
            component:require('../components/Bar.vue')
        }
    ]
});

export default router;