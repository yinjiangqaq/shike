<template>
    <div>
   <textarea placeholder="请输入你的评论，最多评论120字" maxlength="120" v-model="commentText" style="width:100%;height:100px;"></textarea>
   <div style="height:10px;"></div>
   <div class="controls">
        <div class="form-actions" style="margin-left:91%;">
            <input class="btn btn-info" id="submit_btn" type="submit" name="submit" value="提交"/>
            
        </div>
       
         </div>
    
    

    
    </div>
</template>
<script>

export default {
    data(){
        return{
            commentText:'',

        };
    },
 
   methods:{

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
