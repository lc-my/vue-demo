import Vue from 'vue'
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        count:0,
        todos: [
            { id: 1, text: '111111', done: true },
            { id: 2, text: '222', done: false }
        ]
    },
    getters:{
        doneTodos: state => {
            return state.todos.filter(todo => todo.done);
        },
        getTodoById:(state) => (id) =>{
            return state.todos.find(todo => todo.id === id);
        }
    },
    mutations:{
        increment:function(state,value){
            state.count +=  value;
        }
    },
    actions:{
        add:({commit},value) =>{
            commit('increment',value);
        }
    }
});