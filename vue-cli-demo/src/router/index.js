import Vue from 'vue';
import VueRouter from 'vue-router';

import Foo from '../components/Foo'
import Foo1 from '../components/Foo1'
import Foo2 from '../components/Foo2'
import Bar from '../components/Bar'
import User from '../components/User'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/foo',
            name:'foo',
            component:Foo
        },
        {
            path:'/bar',
            components:{
                default:Bar,
                b:Foo
            },children:[
                {
                    path:'1',
                    name:'foo1',
                    component:Foo1
                },{
                    path:'2',
                    name:'foo2',
                    component:Foo2
                }
            ]
        },{
            path:'/user/:id',
            name:'user',
            props:true,
            component:User
        },{
            path:'*'
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