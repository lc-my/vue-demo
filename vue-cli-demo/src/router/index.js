import Vue from 'vue';
import VueRouter from 'vue-router';

import Foo from '../components/Foo'
import Bar from '../components/Bar'
import User from '../components/User'

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/foo',
            component:Foo
        },
        {
            path:'/bar',
            component:Bar
        },{
            path:'/user/:id',
            component:User
        }/*,
        {
            path:'/home',
            require:('../components/Home.vue')
        }*//*,
        {
            path:'*',
            redirect:'/home'
        }*/
    ]
});

export default router;