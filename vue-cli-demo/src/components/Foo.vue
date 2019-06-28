<template>
    <div>
        this foo page
        <p>
            <button v-on:click="button1Click">点击1</button>
        </p>
        <p>
            <button v-on:click="button2Click">点击2</button>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Foo",
        data:function(){
            return {

            }
        },
        methods:{
            button1Click:function(){
                this.$router.push({name:'foo1'})
            },
            button2Click:function(){
                this.$router.replace({name:'foo2'})
            }
        }
    }
</script>

<style scoped>

</style>