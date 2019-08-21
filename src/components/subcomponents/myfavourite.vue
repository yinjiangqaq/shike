<template>
    <ul>
        <li v-for="(item,index) in postlist_fav2" :key=index>
            <router-link :to="'/detail/'+item.id">
                <div>
                    <img :src="item.image" alt="">
                </div>
                <div class="info">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="content">
                        {{item.content}}
                    </div>
                    <div class="author_info">
                        <div class="author_name">
                            {{item.userName}}
                        </div>
                        <div class="comment_number">
                            <span class="glyphicon glyphicon-comment" aria-hidden="true"></span>&nbsp;{{item.comLength}}
                        </div>
                        <div class="like">
                            <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>&nbsp;{{item.likeNum}}
                        </div>
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            postlist_fav:[],
            comLength:'',
            postlist_fav1:[],
            postlist_fav2:[],
            j:0
        }
    },
    created(){
        this.$http.get('/user/{id}',{params:{id:this.$cookie.get("userId")}}).then(function(res){
            console.log("ok");
            this.postlist_fav=res.body.postsOfLike;
            for(var i=0;i<this.postlist_fav.length;i++){
                var postid=this.postlist_fav[i].id;

                this.$http.get('/post/{id}',{params:{id:postid}}).then(function(res){

                    this.postlist_fav1={
                        [this.j++]:{
                            id:res.body.id,
                            image:res.body.image,
                            title:res.body.title,
                            content:res.body.content,
                            userName:res.body.author.userName,
                            likeNum:res.body.likeNum,
                            comLength:res.body.commentSet.length //添加新属性，解决set property of undefined
                        }
                    }

                    var jsonData=JSON.stringify(this.postlist_fav1[this.j-1]);//转为json格式
                    this.postlist_fav2[this.j-1]=eval('('+jsonData+')');//转为json对象

                    this.postlist_fav2=this.postlist_fav2.map(item=>{ //解决无法渲染，对象指向问题
                        
                        return item
                    })
                })
            }
        }),function(res){
            window.alert("失败");
        }
    }
}
</script>

<style lang="scss" scoped>
ul{
    list-style: none;
}

li{
    height:180px;
    width:1000px;
    border-bottom:1px solid rgba(247, 243, 243, 0.87);
    margin-top:60px;
    a{
        display: flex;
        // align-items: center;
    }
    a:hover{
        text-decoration:none;
    }
    img{
        height:150px;
        width:150px;
    }
    .title{
        margin-left:50px;
        font-size:20px;
        color:#3a3939;
    }
    .content{
        margin-left:50px;
        margin-top:30px;
        font-size:15px;
        color:#797878;
    }
    .author_info{
        display: flex;
        margin-left:50px;
        margin-top:30px;
        color:#797878;
        .comment_number{
            margin-left:20px;
        }
        .like{
            margin-left:20px;
        }
    }
}

ul li:hover{
    box-shadow:0 0 5px rgb(95, 166, 236);
}
</style>
