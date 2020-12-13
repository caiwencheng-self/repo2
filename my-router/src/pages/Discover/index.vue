<template>
  <fieldset>
    <legend>发现</legend>
    <h1>新歌排行榜</h1>
    <!-- 在插值表达式里面的话，就不需要this -->
    <!-- <h1>动态路由参数:{{$route.params}}</h1>   -->
    <!-- <ul>
      <li>
        <router-link to="/detail/1">
          九月九的酒
        </router-link>
      </li>
      <li>
        <router-link to="/detail/2">
          纤夫的爱
        </router-link>
      </li>
      <li>
        <router-link to="/detail/3">
          窗外
        </router-link>
      </li>
    </ul> -->
    <router-link :to="{name:'toplist'}">排行榜</router-link> |

    <router-link to="/discover/playlist">歌单</router-link> |

    <router-link to="/discover/Djradio">主播电台</router-link> |
    
    <router-view></router-view>
  </fieldset>
</template>
<script>
  export default{
    // mounted () {
    //   // 两个参数：
    //   // this.$router  this.$route
    //   // console.log(this.$router); // 是最大的路由对象，包含了$route;
    //   // console.log(this.$route);  // $route指的是当前匹配到的路由的参数;
    //   // 获取动态路由参数: 通过this.$route.parmas
    // },
    // watch: {
    //   $route(newVal){
    //     console.log(newVal);
    //   }
    // }
  }
</script>

<style lang="less" scoped>
  li{
    cursor:pointer;
    border-bottom:1px solid hotpink ;
  }
  ul{
    list-style:none;
  }
</style>