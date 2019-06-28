<template>
    <div>User{{ $route.params.id }}</div>
</template>

<script>
    export default {
        name: "User",
        mounted:function(){
            console.info(this.$route);

        }
    }
</script>

<style scoped>

</style>