<template>
<div class="app">
    <ul>
        <li v-for="(item,index) in postlist_like" :key=index>
            <router-link :to="'/detail/'+item.id">
            <div class="post_content">
                <div class="rank">
                    {{index+1}}
                </div>

                <div class="post_image">
                    <img :src="item.image" alt="">
                </div>

                <div class="post_info">
                    <div class="post_title">
                        {{item.title}}
                    </div>
                    <div class="post_content">
                        {{item.content}}
                    </div>
                    <div class="post_comment">
                        <div class="author_name">
                            {{item.author.userName}}
                        </div>
                        <div class="comment_number">
                            <span class="glyphicon glyphicon-comment" aria-hidden="true"></span>&nbsp;{{item.commentSet.length}}
                        </div>
                        <div class="like">
                            <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>&nbsp;{{item.likeNum}}
                        </div>
                    </div>
                </div>
            </div>
            </router-link>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data(){
        return{
            postlist_like:[],
        }
    },
    created(){
        this.$http.get('/billboardOfLike').then(function(res){
            console.log("ok")
            this.postlist_like=res.body
        }),function(res){
            window.alert("失败")
        }
    }
    
}
</script>

<style lang="scss" scoped>
.app{
    margin-top:50px;
    width:950px;
    margin-left:85px;
}

ul{
    list-style:none;
    
}

li{
    border-bottom:1px solid rgba(247, 243, 243, 0.87);
}

ul li:hover{
    box-shadow:0 0 5px rgb(95, 166, 236);
}

a:hover{
    text-decoration:none;
}

.post_content{
    display:flex;
    margin-top:20px;
    margin-bottom:10px;
    .rank{
        height:110px;
        width:80px;
        font-size:30px;
        color:rgba(145, 145, 145, 0.801);
        text-align: center;
        line-height: 100px;//垂直居中
    }

    .post_image{
        img{
            height:100px;
            width:100px;
        }
    }

    .post_info{
        .post_title{
            margin-left:50px;
            font-size:20px;
            font-weight:bold;
            color:#3a3939;
        }

        .post_content{
            margin-left:50px;
            margin-top:15px;
            font-size:15px;
            color:#3a3939;
        }

        .post_comment{
            display:flex;
            margin-left:50px;
            margin-top:15px;
            font-size:13px;
            color:rgba(145, 145, 145, 0.801);
            .comment_number{
                margin-left:15px;
            }

            .like{
                margin-left:15px;
            }
        }
    }
}

li router-link:hover{
    color:blue;
}
</style>
