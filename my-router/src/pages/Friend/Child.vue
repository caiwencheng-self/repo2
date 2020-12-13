<template>
  <div class="child">
    <Aside class="left"></Aside>
    <Article class="left"></Article>
  </div>
</template>
<script>
import Aside from "./Aside";
import Article from "./Article";

export default{
  components:{
    Aside,
    Article
  }
}
</script>

// <style lang="less">
//   .left{
//     float: left;
//     width:40%;
//   }
// </style>