<template>
     <div class="comment-list">
                        <h4 style="background-color: #eee;text-align:center;height:40px;line-height:40px;">评论列表</h4>
                        <div class="cmt-item" v-for="(item, index) in comments" :key=index>
                            <div class="cmt-title">
                           第{{item.id}}楼 &nbsp; &nbsp;用户: {{item.userName}}&nbsp;&nbsp;发布时间:{{item.postdate}} 
                            </div>
                            <div class="cmt-body">
                                {{item.content}}
                            </div>
                        </div> 
                    </div>
</template>
<script>
export default {
    data(){
        return{
comments:[
    {   
        id:'1',
        userName:'林俊涛',
        postdate:'2019-8-6',
        content:'follow your fire',
    },
    {
        id:'2',
        userName:'dai',
        postdate:'2019-08-06',
        content:'OH',
    }
]
        };
    },
    created(){
this.getComments();
  }, 
    methods:{
      getComments(){
    
}
},
}
</script>
<style lang="scss" scoped>

</style>
