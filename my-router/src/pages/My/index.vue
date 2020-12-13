<template>
  <fieldset>
    <legend>我的</legend>
    <h1>登录网易云音乐 </h1>
    <h2>{{name}}</h2>
  </fieldset>
</template>
<script>
  export default{
    // watch:{
    //   $route(newVal){
    //     console.log(newVal);
    //   }
    props:["name"],
    
  }
</script>