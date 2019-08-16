<template>
    <div>
         <form action="/comment" enctype="multipart/form-data" method="post" @submit.prevent="submit($event)" accept-charset="UTF-8">
          
            <b v-if="type==='1'">你回复&nbsp;{{name}}</b>
        <b v-else></b>
        <textarea placeholder="请输入你的评论，最多评论120字" maxlength="120" style="width:100%;height:100px;" v-model="commentText" id="comment-box" name="content"></textarea>
        <div style="height:10px;"></div>
        <div class="controls">
               <input type="text" name="userName" v-model="userName" style="display:none;" >
               <input type="text" name="commentDate" v-model="date" style="display:none;">
               <input type="text" name="postId" style="display:none;" v-model="postid">
        <div class="form-actions" style="margin-left:82%;">
            <input class="btn btn-info" id="submit_btn" type="submit" name="submit" value="提交"/>
            
             <button class="btn" @click.stop="cancelComment" type="button">取消</button>
        </div>
     
        <div class="comment-list">
                        <h4 style="background-color: #eee;text-align:center;height:40px;line-height:40px;">评论列表</h4>
                        <div class="cmt-item" v-for="(item, index) in comments" :key=index>
                            <div class="cmt-title" @click="response(index)">
                           第{{index+1}}楼 &nbsp; &nbsp;用户: {{item.user.userName}}&nbsp;&nbsp;发布时间:{{item.date  | dateFormat}}
                            </div>
                            <div class="cmt-body">
                                {{item.content}}
                            </div>
                            <!-- <div class="res-body">
                                {{item.reponseText}}
                            </div> -->
                        </div> 
                    </div>
         </div>
         </form>
    </div>
</template>
<script>
import { constants } from 'crypto';

export default {
    props:['id'],
    data(){
        return{
            commentText:'',
            type:'0',
            name:'',
            userName:'',
            date:'',
            postid:'',
           
comments: [] ,

        };
    },
    inject:['reload'],
 created(){
     this.userName=this.$cookie.get('user');
   
     this.postid=this.id;
     console.log(this.postid);
     this.formatDate(new Date());
    this.getComments();
  }, 
    methods:{
      
      getComments(){
    var postId=this.postid;
   this.$http.get('/comments',{params :{postId} }).then(function(res){
       console.log(res.body);
       this.comments=res.body;
       console.log(this.comments);
   },function(res){
       window.alert("失败");
   })
},
cancelComment(){
    this.commentText='';
    this.type='0';
},
 response(i){
     this.type='1';
     this.name=this.comments[i].user.userName;
     $('#comment-box').focus();
    },
 submit: function(e){
      var formData =new FormData(e.target);
      this.$http.post('/comment',formData).then(function(res){
          window.alert("成功");
          this.reload();
    //   this.$router.push('/detail/'+this.postid);
      this.commentText='';
},function(res){
  window.alert("评论失败");
})
},
formatDate(date)
{
  var y = date.getFullYear();  
    var m = date.getMonth() + 1;  
    m = m < 10 ? ('0' + m) : m;  
    var d = date.getDate();  
    d = d < 10 ? ('0' + d) : d;  
    var h = date.getHours();  
    var minute = date.getMinutes();  
    minute = minute < 10 ? ('0' + minute) : minute; 
    var second= date.getSeconds();  
    second = minute < 10 ? ('0' + second) : second;  
    this.date= ''+ y + '-' + m + '-' + d+' '+h+':'+minute+':'+ second; 

},
    },
   
   
};
</script>
<style lang="scss" scoped>

hr{
        border-top: 3px solid #ccc;
}
.comment-list{

    .cmt-item{
        
        .cmt-title{
background-color: #eee;
font-size: 15px;
        }
        .cmt-body{
text-indent:2em;
font-size: 13px;
line-height: 30px;
        }
    }
}
</style>
