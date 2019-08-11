<template>
<div class="container">
    
    <div class="header" style="margin:0;padding:0;height:200px;">
        <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎登陆 -->
        <img src="../images/header.png" alt="logo" >
    </div>
    <div class="app">
    <div class="box">
        <div style="height:30px; width:100%;"></div>
        <div style="height:60px; width:100%;">
            <img src="../images/personphoto.jpg" alt="" class="img-circle" style="height: 50px;width:50px;position:absolute;margin-left:165px;">
            <span style="margin-left:230px;float:left;position:relative;">
                <ul style="list-style:none;padding:0; ">
                    <li style="font-size:16px;font-weight:bold;">{{username}}</li>
                    <li style="margin-top:8px;color:#808080">{{postTime  | dateFormat}}</li>
                </ul>   
            </span>
        </div>
        
        <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-6" style="width:900px;margin-left:-220px;margin-top:20px">
                <div class="thumbnail">
                    <div class="caption">
                        <h3 style="text-align:center">{{title}}</h3>
                        <hr>
                    </div>
                        <img src="../images/post1.png" alt="..." style="height: 400px;width:400px;">
                    <hr>
                    <p>{{text}}</p>
                    <hr>
                    <div class="comment-area">
                        <comment-box :key="this.id"></comment-box>
                    </div> 
                </div>
            </div>
        </div>
        
    </div>
    </div>
</div>
</template>
<script>
import comment from './subcomponents/comment.vue';
export default {
  data(){
      return{
        id: this.$route.params.id,//将上个页面面传的id保留下来
        username:'用户名',
        title:'标题',
        text:'正文',
        postTime:'',
      };
  },
  //页面刷新就会调用的函数
 
   created(){
    this.getDate();
    },

  methods:{
    getDate(){
        var dt=new Date();
        this.postTime=dt;
    }
  },
  components:{
      //用来注册子组件的节点，页面标签可以直接用comment-box
      "comment-box":comment,
  }  
}
</script>
<style lang="scss" scoped>
.container{
  background-color: rgba(247, 243, 243, 0.87);
  height:1300px;
  width:1550px;
  padding:0px;
}

.app{
  background-color: #fff;
  height:1100px;
  width:1150px;
  margin-left:180px;
}

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
