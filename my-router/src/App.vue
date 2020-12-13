<template>
  <div id="app">
    <!-- router-link的作用是什么：就是可以切换浏览器路径，类似于a标签，但是和a标签是由区别的 -->

    <router-link to="/my">我的</router-link> |

    <router-link to="/friend">朋友</router-link> |

    <router-link to="/discover">发现</router-link> |

    <!-- <a href="#/friend">朋友</a> -->
    <!-- 使用路由组件来导航的方式是声明式导航 -->
    <!-- 通过代码这种逻辑性导航方式的化，我们叫做编程式导航 -->

  <button @click="jump">普通按钮</button>
    <!-- 视图输出组件 -->
    <router-view></router-view> 
  </div>
</template>
<script>
  export default{
    methods:{
      jump(){
        // 编程式导航的api;
        // $router.push()
        // this.$router.push("/friend")
        // 不带/的话，浏览器会默认进行拼接；带上/斜杠的话，直接会到顶级路径；

        // this.$router.push({path:"/friend",query:{hobby:"写代码"}});  

        // 如果不写query的话直接在后面加一个？拼进行拼接的话，也是可以的
        
        // this.$router.push({name:"toplist"})  // 直接在这对象里面给一个name属性的话，会直接跳转到目标地址 非常的方便;跳转具名路由；

        // this.$router.push( {name:"toplist",params:{id:5201314}});

        // 当使用path进行跳转的时候，会自动忽略params属性
        // this.$router.push( {path:"/discover/toplist",params:{id:5201314}});

        // replace里的参数和push里面的参数是一样的;
        // this.$router.replace("/discover/playlist") // 会替换当前历史记录载

        this.$router.go(-2); // -2是往浏览器历史记录的左边倒退两步
      }
    }
  }
</script>

