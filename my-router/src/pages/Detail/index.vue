<template>
  <fieldset>
    <legend>详情页</legend>
    <h1>歌曲名:{{listDetail.name}}</h1>
    <h3>演唱:{{listDetail.author}}</h3>
    <h4>歌词:{{listDetail.lrc}}</h4>
  </fieldset>
</template>
<script>
  export default{
    data(){
      return {
        listDetail:{},
        list:[
          {
            id:1,
            name:"九月九的酒",
            author:"陈少华",
            lrc:`走走走走走啊走
                    走到九月九
                    他乡没有烈酒
                    没有问候
                    走走走走走啊走
                    走到九月九
                    家中才有自由
                    才有九月九`
          },
          {
            id: 2,
            author: '尹相杰',
            name:"千峰的爱",
            lrc: `男：
            妹妹你坐船头，哥哥在岸上走，恩恩爱爱纤绳荡悠
            妹妹你坐船头，哥哥在岸上走，恩恩爱爱纤绳荡悠
            女：
            小妹妹我坐船头，哥哥你在岸上走，我俩的情我俩的爱
            在纤绳上荡悠悠，噢荡悠悠
            你一步一叩首啊，没有别的乞求
            只盼拉住我妹妹的手哇，跟你并肩走，噢……噢……`
          },
          {
            id: 3,
            name:"窗外",
            author: '李琛',
            lrc: `今夜我又来到你的窗外

                    窗帘上你的影子多么可爱

                    悄悄的爱过你这么多年

                    明天我就要离开`
          }
        ]
      }
    },
    mounted(){
      // console.log(this.$route.params.id);
      let id = this.$route.params.id;
      let res = this.list.find(function(item,index,arr){
        return item.id == id
      })
      console.log(res);
      this.listDetail =res;
    }
  }
</script>