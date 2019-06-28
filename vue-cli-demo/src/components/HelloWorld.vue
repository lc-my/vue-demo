<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <p>
       <router-link :to="{name:'foo'}">Go To Foo</router-link>
   </p>
   <p>
       <router-link to="/bar">Go To Bar</router-link>
   </p>
      <p>
          <router-link :to="{name:'user',params:{id:1}}">Go To User</router-link>
      </p>
      <router-view class="defalut" />
      <router-view class="b" name="b" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted:function(){
      this.$router.push('/admin');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.hello{
    position: absolute;
}
.defalut{
    position: relative;
    background: azure;
    top: 10px;
}
.b{
  position: relative;
  background: #42b983;
    top: 20px;
}
a {
  color: #42b983;
}
</style>
