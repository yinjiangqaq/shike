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
            <img :src="personimg" alt="" class="img-circle" style="height: 50px;width:50px;position:absolute;margin-left:165px;">
            <span style="margin-left:230px;float:left;position:relative;">
                <ul style="list-style:none;padding:0; ">
                    <li style="font-size:16px;font-weight:bold;">{{username}}</li>
                    <li style="margin-top:8px;color:#808080">{{postTime  | dateFormat}}</li>
                </ul>   
            </span>
            <span style="position:relative;float:left;margin-left:600px; margin-top:8px;">
                <button @click="link2()" :class="[flg3?'btn btn-info':'btn']">{{attention}}</button>
            </span>
        </div>
        
        <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-6" style="width:900px;margin-left:-170px;margin-top:20px">
                <div class="thumbnail">
                    <div class="caption">
                        <h3 style="text-align:center">{{title}}</h3>
                        <hr>
                    </div>
                        <img :src="postimg" alt="..." style="height: 400px;width:80%;">
                    <hr>
                    <p>{{text}}</p>
                    <hr>
                    <div class="like_comment">
                        <div style="display:flex;margin-left:270px;margin-top:-60px;" @click="link()" v-bind:class="[flg1?'gray':'pink']">
                            <span class="glyphicon glyphicon-heart" aria-hidden="true" style="font-size:20px;padding-right:5px;height:20px"></span>
                            {{likability}}
                        </div>
                        <div class="comment" @click="change()" >
                            <i class="el-icon-chat-dot-round"></i>
                            {{comment_amount}}
                        </div>
                    </div>
                    <div v-bind:class="[flg2?'noshow':'show']">
                        <p>
                            <comment-box :id="id"></comment-box>
                        </p>
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
        likability:'0',
        comment_amount:'2',
        flg1:true,
        flg2:true,
        attention:'点击关注',
        flg3:true,
       authorid:'',
        postimg:null,
        personimg:null,
        usersOfLike:[],
      };
  },
  //页面刷新就会调用的函数
 
   created(){
    
    this.$http.get('/post/'+this.id).then(function(res){
    this.authorid=res.body.author.id;
    console.log(this.authorid);
    this.title=res.body.title;
    this.text=res.body.content;
    this.username=res.body.author.userName;
    this.postimg=res.body.image;
    this.postTime=res.body.date;
    this.likability=res.body.likeNum;
    this.personimg=res.body.author.headPortrait;
    this.comment_amount=res.body.commentSet.length;
    var userId=this.$cookie.get('userId');
    this.usersOfLike=res.body.usersOfLike;
   this.search( userId);
 },function(res){
     window.alert("失败");
 })
    },

    methods:{
   search(id){
       for(let i=0;i<this.usersOfLike.length;i++)
       {
           this.flg1=true;
           if(this.usersOfLike[i].id==id)
           {
               this.flg1=false;
               break;
           }
       }
   },
   //点赞函数
    link(){
            // this.list[i].likability++;
            // //把list的索引值当成函数的参数从v-for那边传到后台，在手动修改list具体哪一项的好感度

            //点赞和取消赞
            if(this.flg1){
                var like =this.flg1;
                var userId=this.$cookie.get('userId');
                this.$http.put('/post/'+this.id,{like,userId},{emulateJSON:true}).then(function(res){
                    window.alert("点赞成功");
                });
                this.likability++;
                this.flg1=false;
            }else{
                var like =this.flg1;
                var userId=this.$cookie.get('userId');
                this.$http.put('/post/'+this.id,{like,userId},{emulateJSON:true}).then(function(res){
                    window.alert("取消赞成功");
                });
                this.likability--;
                this.flg1=true;
            }
          
        },
    change(){
        if(this.flg2){
            this.flg2=false;
        }else{
            this.flg2=true;
        }
    },
    //关注点击函数
    link2(){
        if(this.flg3){
            var attention=this.flg3;
            var userId=this.$cookie.get('userId');
             this.$http.put('/user/'+this.authorid,{attention,userId},{emulateJSON:true}).then(function(res){
                 window.alert("关注成功");
             });
            this.flg3=false;
            this.attention='已关注'
        }
        else{
         var attention=this.flg3;
            var userId=this.$cookie.get('userId');
             this.$http.put('/user/'+this.authorid,{attention,userId},{emulateJSON:true}).then(function(res){
                 window.alert("取消关注成功");
             });
         this.flg3=true;
         this.attention='点击关注';
        }
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
  background: #fff;
  height:1000px;
  width:100%;
  padding:0px;
}

.app{
  height:800px;
  width:100%;
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

.gray span{
    color:rgb(161, 159, 159);
}

.pink span{
    color:rgb(243, 129, 192);
}

.like_comment{
    display:flex;
    margin-top:80px;
    margin-left:400px;
}

.comment{
    display:flex;
    margin-top:-60px;
    margin-left:20px;
    margin-right:5px;
    
    i{
        font-size:20px;
        color:rgb(161, 159, 159);
    }

    i:hover{
        color:rgb(243, 129, 192);
    }
}

.comment:hover{
    color:rgb(243, 129, 192);
}

.show p{
    display:block;
}

.noshow p{
    display:none;
}
</style>
