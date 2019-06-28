<template>
    <div>
        {{ count }}
        <p>
            {{ getTodo(1)}}
        </p>
        <button @click="buttonClick">自加</button>
    </div>
</template>

<script>
    import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
    export default {
        name: "VuexApp",
        computed:{
            ...mapState({
                count:state => state.count
            }),
            ...mapGetters({
                getTodo: 'getTodoById'
            }),

        },
        methods:{
            ...mapMutations({
                add:'increment'
            }),
            ...mapActions({
                add2:'add'
            }),
            buttonClick:function(){
                console.info(this.$store.state);
                //this.$store.commit('increment');
                this.add2(1);
            },
            /*getTodo(){
                let item =  this.$store.getters.getTodoById(1);
                console.info(item);
            }*/
        }
    }
</script>

<style scoped>

</style>