<template>
    <div>
      <div class="header" style="margin:0;padding:0;height:200px;">
            <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎登陆 -->
            <img src="../images/logo2.png" alt="logo" >
        </div>
        <div class="box">
            <div style="height:30px; width:100%;"></div>
            <div>
          <img src="../images/排行榜.png" alt="" class="img-circle" style="height: 50px;width:50px;position:absolute;margin-left:300px;">
          <span style="margin-left:360px;float:left;position:relative;">
              <ul style="list-style:none;padding:0; ">
                  <li style="font-size:16px;font-weight:bold;">{{username}}</li>
                  <li style="margin-top:8px;color:#808080">2019.5.9</li>
              </ul>   
          </span>
         </div>
          <div style="height:60px; width:100%;"></div>
         <!-- <div>
             <img src="../images/帖子1.png" alt="帖子" style="width:400px;height:400px;margin-left:130px;"> 
             <h3 style="text-align:center;">{{title}}</h3>
             <p style="text-align:center; width:400px;margin-left:540px;">正文fasjfjfalfkdlafjalsdjasldfjasdkkkkkkkkkalfjdsklfjjkgjdfsgjkjggjdklgjgjdjgjsdflafjdsfjskfsdfljkds</p>
         </div> -->
          <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-6" >
                <div class="thumbnail">
                   
                    
                    <div class="caption">
                        <h3 style="text-align:center">{{title}}</h3>
                       
                        <p>{{text}}</p>
                       <hr>
                    </div>
                     <img src="../images/帖子1.png" alt="..." style="height: 400px;width:400px;">
                    <hr>
                   <div class="comment-area">
                     <comment-box :key="this.id"></comment-box>
                     <comment-content></comment-content>
                    </div> 
                    
                    
                </div>
            </div>
        </div>
          
        </div>
    </div>
</template>
<script>
import comment from '../subcomponents/comment.vue';
import commentContent from '../subcomponents/commentContent.vue';
export default {
  data(){
      return{
          id: this.$route.params.id,//将上个页面面传的id保留下来
          username:'用户名',
          title:'标题',
          text:'正文',
         
      };
  },
  //页面刷新就会调用的函数
 
  methods:{

  },
  components:{
      //用来注册子组件的节点，页面标签可以直接用comment-box
      "comment-box":comment,
      "comment-content":commentContent,
  }  
}
</script>
<style lang="scss" scoped>
.header{
    font-size:30px;
    padding-top:30px;
    background-color: #f7f7f7;
    height:80px;
    line-height: 40px;
}
hr{
 border-top: 3px solid #eee;
}
</style>
