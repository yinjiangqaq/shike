<template>
<div class="app">
    <ul>
        <li v-for="item in postlist_click" :key="item.id">
            <router-link :to="'/detail/'+item.id">
            <div class="post_content">
                <div class="rank">
                    {{item.rank}}
                </div>

                <div class="post_image">
                    <img :src="item.img_url" alt="">
                </div>

                <div class="post_info">
                    <div class="post_title">
                        {{item.title}}
                    </div>
                    <div class="post_content">
                        {{item.msg}}
                    </div>
                    <div class="post_comment">
                        <div class="author_name">
                            {{item.author}}
                        </div>
                        <div class="comment_number">
                            <span class="glyphicon glyphicon-comment" aria-hidden="true"></span>&nbsp;{{item.comment}}
                        </div>
                        <div class="like">
                            <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>&nbsp;{{item.like}}
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
            postlist_click: [{
                id:'1',
                rank:'1',
                title:'标题',
                msg: '帖子内容',
                author:'作者名称',
                comment:'评论数',
                like:'点赞量',
                img_url:'https://avatars1.githubusercontent.com/u/275871?s=60&v=4'
            }, {
                id:'2',
                rank:'2',
                title:'标题',
                msg: '帖子内容',
                author:'作者名称',
                comment:'评论数',
                like:'点赞量',
                img_url:'https://avatars1.githubusercontent.com/u/275871?s=60&v=4'
            },{
                id:'3',
                rank:'3',
                title:'标题',
                msg: '帖子内容',
                author:'作者名称',
                comment:'评论数',
                like:'点赞量',
                img_url:'https://avatars1.githubusercontent.com/u/275871?s=60&v=4'
            },{
                id:'4',
                rank:'4',
                title:'标题',
                msg: '帖子内容',
                author:'作者名称',
                comment:'评论数',
                like:'点赞量',
                img_url:'https://avatars1.githubusercontent.com/u/275871?s=60&v=4'
            },{
                id:'5',
                rank:'5',
                title:'标题',
                msg: '帖子内容',
                author:'作者名称',
                comment:'评论数',
                like:'点赞量',
                img_url:'https://avatars1.githubusercontent.com/u/275871?s=60&v=4'
            },{
                id:'6',
                rank:'6',
                title:'标题',
                msg: '帖子内容',
                author:'作者名称',
                comment:'评论数',
                like:'点赞量',
                img_url:'https://avatars1.githubusercontent.com/u/275871?s=60&v=4'
            },
            {
                id:'7',
                rank:'7',
                title:'标题',
                msg: '帖子内容',
                author:'作者名称',
                comment:'评论数',
                like:'点赞量',
                img_url:'https://avatars1.githubusercontent.com/u/275871?s=60&v=4'
            },
            {
                id:'8',
                rank:'8',
                title:'标题',
                msg: '帖子内容',
                author:'作者名称',
                comment:'评论数',
                like:'点赞量',
                img_url:'https://avatars1.githubusercontent.com/u/275871?s=60&v=4'
            }, ]
        }
    },
}
</script>

<style lang="scss" scoped>
.app{
    margin-top:50px;
    // height:900px;
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
