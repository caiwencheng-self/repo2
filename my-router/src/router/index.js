import Vue from "vue";
import VueRouter from "vue-router";
import Friend from "../pages/Friend";
import Discover from "../pages/Discover";

Vue.use(VueRouter);
// 将这个路由注入到vue的原型上，这样我们所有的子组件都可以用到它;
// 用了install;

// 配置路由的三部曲：
// 1.定义页面组件；
// 2.配置 routers (引入页面组件 用一个path对应一个component)
// 3.正确的放置视图组件 router-view;

// 核心：路由就是用一个pages对应一个组件
// 路由配置完成后，千万不要忘了视图组件 router-view

// 已经配置的路径我们称之为合法的路径
// 不合法的其他路径我们可以用通配符*来代替。

// 路径匹配优先级，谁先定义谁的优先级就高
const routes = [
  // 对于不合法的路径都会进入到404页面
  {
    path:"*",
    component:() => {
      return import(/* webpackChunKName:"page40" */ "../pages/page404")
    }
  },
  {
    path:"/my",
    component:() => {
      return import(/* webpackChunKName:"page40" */ "../pages/My")
    }
  },
  {
    path: '/detail/:id', // 变成动态路由参数的方式
    component:() => {
      return import(/* webpackChunKName:"detail" */ "../pages/Detail")
    }
  },
  {
    // 一个path对应一个组件;
    path:"/discover",  // 动态路由参数 相当于二级路径 动态路由参数后面的参数可以从组件中来获取
    redirect:"/discover/toplist", // 路由的重定向；当匹配到这个路径的时候，重定向到这个页面。
    component:Discover,
    children:[ // 配置子路由;
      {
        path:"toplist", // 子路由的路径不能加/ ，否则会报错;
        name:"toplist", // 命名路由，不用考虑它是几级路径，只需要在router-link里面的to属性添加一个对象{name:xxx},并且把to属性变成动态属性，前面添加一个：
        component:() => {
          return import(/* webpackChunKName:"toplist" */ "../pages/Discover/toplist.vue")
        }
      },
      {
        path:"playlist", // 子路由的路径不能加/ ，否则会报错;
        name:"playlist", 
        component:() => {
          return import(/* webpackChunKName:"playlist" */ "../pages/Discover/playlist.vue")
        }
      },
      {
        path:"djradio", // 子路由的路径不能加/ ，否则会报错;
        name:"djradio",
        component:() => {
          return import(/* webpackChunKName:"Djradio" */ "../pages/Discover/Djradio.vue")
        }
      }
    ]
  },
  {
    path: '/friend',
    component:Friend,
    children: [
      {
        path: 'child',
        // components:{
        //   aside:() => {
        //     return import(/* webpackChunKName: "aside" */ "../pages/Friend/Aside.vue")
        //   },
        //   article: () => {
        //     return import(/* webpackChunKName: "article" */ "../pages/Friend/Article.vue")
        //   }
        // }
        component:() => {
          return import(/* webpackChunKName:"child" */ "../pages/Friend/Child.vue")
        }
      }
    ]
  },
  {
    path:"/my/:name",
    props:true, // 路由参数解耦合，通过数据流传递
    component: () => {
      return  import(/* webpackChunkName: "my" */ "../pages/My")
    }
  },
  // {
  //   // path: "/about",
  //   // name: "About",
  //   // route level code-splitting  // 代码等级切割
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // // 作用：优化首页加载速度 
  //   // component: () =>
  //   //   import(/* webpackChunkName: "about" */ "../pages/About.vue")
  //     // 路由懒加载的技术:在于当此路由被访问的时候才会加载组件
  //     // 原理：使用了webpack的代码切割功能.
  //     // 异步组件
  // }
];

  // 路由的两种模式：hash模式  history模式
const router = new VueRouter({
  routes,
  mode:"history"  //h5的history模式
});

export default router;


// vuex知识点补充：data里面的所有属性都可以叫做状态.
// 组件中的状态需要给多个组件共享的时候，就需要使用vueX,也就是组件之间的传值。
// 所需要共享的状态都给他放入到一个store的仓库中