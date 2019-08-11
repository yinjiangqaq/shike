<template>
    <div>
        <b v-if="type==='1'">你回复&nbsp;{{name}}</b>
        <b v-else></b>
   <textarea placeholder="请输入你的评论，最多评论120字" maxlength="120" style="width:100%;height:100px;" v-model="commentText" id="comment-box"></textarea>
   <div style="height:10px;"></div>
   <div class="controls">
        <div class="form-actions" style="margin-left:82%;">
            <input class="btn btn-info" id="submit_btn" type="submit" name="submit" value="提交"/>
             <button class="btn" @click="cancelComment">取消</button>
        </div>
        <div class="comment-list">
                        <h4 style="background-color: #eee;text-align:center;height:40px;line-height:40px;">评论列表</h4>
                        <div class="cmt-item" v-for="(item, index) in comments" :key=index>
                            <div class="cmt-title" @click="response(index)">
                           第{{item.id}}楼 &nbsp; &nbsp;用户: {{item.userName}}&nbsp;&nbsp;发布时间:{{item.postdate}}
                            </div>
                            <div class="cmt-body">
                                {{item.content}}
                            </div>
                            <div class="res-body">
                                {{item.reponseText}}
                            </div>
                        </div> 
                    </div>
         </div>
    
    

    
    </div>
</template>
<script>

export default {
    data(){
        return{
            commentText:'',
            type:'0',
            name:'',
           
comments:[
    {   
        id:'1',
        userName:'林俊涛',
        postdate:'2019-8-6',
        content:'follow your fire',
        responseText:'',
    },
    {
        id:'2',
        userName:'dai',
        postdate:'2019-08-06',
        content:'OH',
        responseText:'',
    },
    
]
        };
    },
 created(){
this.getComments();
  }, 
    methods:{
      getComments(){
    
},
cancelComment(){
    this.commentText='';
    this.type='0';
},
     response(i){
     this.type='1';
     this.name=this.comments[i].userName;
     $('#comment-box').focus();
    },
    },
   
    props:["id"],
}
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
